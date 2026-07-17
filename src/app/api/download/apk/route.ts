// Vercel Edge Runtime API route to proxy the private repo APK release asset.
//
// Tries multiple sources in order:
//   1. GITHUB_RELEASE_TOKEN env var (fine-grained PAT, Contents: Read on
//      gary3159/opensite-android)
//   2. GH_TOKEN env var (legacy PAT)
//   3. GITHUB_TOKEN env var (Vercel sometimes exposes this — only if the
//      project is connected to a Vercel GitHub App with the right scopes)
//
// Falls back to public GitHub raw if everything fails (will only work when
// the repo is public).

export const runtime = "nodejs";

const REPO = "gary3159/opensite-android";
const RELEASE_TAG = "v0.1.0";
const ASSET_NAME = "app-debug.apk";

const APAC_DOWNLOAD = `https://github.com/${REPO}/releases/download/${RELEASE_TAG}/${ASSET_NAME}`;
const APAC_API = `https://api.github.com/repos/${REPO}/releases/assets`;

// GitHub release-asset id (set after upload — verify via `gh release view`)
// Last verified: 480439272 (re-uploaded at 2026-07-17T14:00:56Z, 23,379,017 bytes)
const KNOWN_ASSET_ID = "480439272";

function pickToken(): string | undefined {
  return (
    process.env.GITHUB_RELEASE_TOKEN ||
    process.env.GH_TOKEN ||
    process.env.GITHUB_TOKEN ||
    process.env.VERCEL_GITHUB_TOKEN
  );
}

async function fetchWithToken(url: string, token?: string) {
  const headers: Record<string, string> = {
    "User-Agent": "opensite-web-download-proxy",
    Accept: "application/octet-stream",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return fetch(url, { headers, redirect: "follow" });
}

export async function GET() {
  const token = pickToken();

  // Strategy 1: redirect (best — GitHub's CDN serves directly, no bandwidth through us)
  // We can only redirect if the URL is publicly resolvable, which it isn't for private.
  // So we MUST stream through our function.

  let upstream: Response;

  // Strategy A: hit the known asset API endpoint with the token (bypasses the
  // 404 the unauthenticated public URL returns)
  upstream = await fetchWithToken(
    `${APAC_API}/${KNOWN_ASSET_ID}`,
    token,
  );

  // Fallback: try the public download URL with token header (GitHub will 302
  // us to S3 in the authenticated case)
  if (!upstream.ok && upstream.status === 404) {
    upstream = await fetchWithToken(APAC_DOWNLOAD, token);
  }

  if (!upstream.ok) {
    // User-friendly plain-text error with explicit attachment header
    // so browsers save it as a .txt file (not auto-rendered in-tab).
    return new Response(
      `OpenSite APK temporarily unavailable.\n\n` +
        `Status: ${upstream.status} ${upstream.statusText}\n` +
        `Token: ${token ? "configured but fetch failed" : "GITHUB_RELEASE_TOKEN not set on Vercel"}\n\n` +
        `If you're seeing this, the server admin needs to set the\n` +
        `GITHUB_RELEASE_TOKEN env var in Vercel project settings.\n`,
      {
        status: 502,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Content-Disposition":
            'attachment; filename="opensite-download-error.txt"',
        },
      },
    );
  }

  // Stream through, preserving content-type and length
  const headers = new Headers();
  headers.set(
    "Content-Type",
    upstream.headers.get("content-type") || "application/vnd.android.package-archive",
  );
  headers.set(
    "Content-Length",
    upstream.headers.get("content-length") || "",
  );
  headers.set(
    "Content-Disposition",
    `attachment; filename="opensite-android-${RELEASE_TAG}.apk"`,
  );
  headers.set("Cache-Control", "public, max-age=300, s-maxage=300");

  return new Response(upstream.body, { status: 200, headers });
}