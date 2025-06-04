export default {
  async fetch(request, env, ctx) {
    // env.ASSETS is the binding to your static assets.
    // It's configured in wrangler.jsonc to point to the "./dist" directory.
    // Wrangler can automatically handle SPA routing if "not_found_handling": "single-page-application"
    // is set in the assets configuration.
    return env.ASSETS.fetch(request);
  },
};