import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here.
   */
  server: {
    CONVEX_DEPLOYMENT: z.string(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    SITE_URL: z.url(),
  },

  /**
   * Specify your client-side environment variables schema here.
   * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_CONVEX_URL: z.url(),
  },

  /**
   * You can't destructure `process.env` as a regular object in the Next.js edge runtimes
   * (e.g. middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    CONVEX_DEPLOYMENT: process.env.CONVEX_DEPLOYMENT,
    NODE_ENV: process.env.NODE_ENV,
    SITE_URL: process.env.SITE_URL,

    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
  },

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === "lint",

  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
