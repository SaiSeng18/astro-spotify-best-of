import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		react(),
		prefetch({
			throttle: 3,
		}),
	],
	// output: "server",
	// adapter: vercel()
});
