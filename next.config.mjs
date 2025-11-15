// next.config.mjs
import { execSync } from "node:child_process";

/** Build metadata (safe for Turbopack) */
const safeExec = (cmd) => {
  try {
    return execSync(cmd).toString().trim();
  } catch {
    return "unknown";
  }
};

const git = {
  version: safeExec("git describe --tags --always"),
  branch: safeExec("git rev-parse --abbrev-ref HEAD"),
  commit: safeExec("git rev-parse --short HEAD"),
};
const date = new Date();

const BUILD_DATA = `
  version: ${git.version},
  branch: ${git.branch},
  commit hash: ${git.commit},
  build time: ${date.toDateString()} ${date.toTimeString()}
`;

/** Content Security Policy */
const csp = `
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  frame-ancestors 'none';
  img-src 'self' https: data: blob:;
  font-src 'self' https: data:;
  style-src 'self' 'unsafe-inline' https:;
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  connect-src 'self' https:;
  form-action 'self' mailto:;
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

/** Security headers */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,

  // ✅ Expose build metadata to client/server (Turbopack-friendly)
  //    Use with: process.env.BUILD_DATA
  env: {
    BUILD_DATA,
  },

  // ✅ Keep your headers (Turbopack supports this)
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  // ✅ Explicit empty turbopack config silences the warning
  turbopack: {},

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // If you load remote images, uncomment and list domains:
  // images: { domains: ["images.unsplash.com", "avatars.githubusercontent.com"] },
};

export default nextConfig;
