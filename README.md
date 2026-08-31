# XYJASH Tools

Run `npm run dev` for local development and `npm run build` for a production build. Deploy the resulting project to Vercel or any Node-compatible platform.

Branding and monetization live in `src/config/site.ts`. Add tools in `src/data/tools.ts`; the dynamic tool route automatically creates the page, metadata, sitemap entry, and related links. Set ad and analytics IDs in the configuration/environment when ready. API-backed tools are intentionally isolated in the tool client so a failed service never affects the rest of the site.
