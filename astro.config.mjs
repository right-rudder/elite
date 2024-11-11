import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://eliteproaviation.com/",
  integrations: [mdx(), sitemap(), tailwind(), react(), partytown()],
  redirects: {
    "/posts/[...slug]": "/blog/[...slug]",
    "/multi-engine-rating": "/flight-training/multi-engine-rating",
    "/private-pilot-training-program":
      "/flight-training/private-pilot-training",
    "/instrument-rating-course": "/flight-training/instrument-rating",
    "/commercial-pilot-license": "/flight-training/commercial-pilot-training",
    "/aircraft-management": "/aircraft-services",
    "/aircraft-brokerage": "/aircraft-services/aircraft-brokerage",
    "/aircraft-for-sale": "/aircraft-services/aircraft-for-sale",
    "/aircraft-rental-other-services": "/aircraft-services/aircraft-rentals",
  },
});
