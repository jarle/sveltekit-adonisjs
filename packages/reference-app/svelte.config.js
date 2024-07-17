import adapter from '@matstack/sveltekit-adonisjs/adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		files: {
			appTemplate: 'resources/svelte_app/src/app.html',
			routes: 'resources/svelte_app/src/routes',
			lib: 'resources/svelte_app/src/lib',
			assets: 'resources/svelte_app/static',
			errorTemplate: 'resources/svelte_app/src/error.html',
			params: 'resources/svelte_app/src/params',
			hooks: {
				client: 'resources/svelte_app/src/hooks.client',
				server: 'resources/svelte_app/src/hooks.server',
				universal: 'resources/svelte_app/src/hooks',
			},
			serviceWorker: 'resources/svelte_app/src/service-worker',
		},
		adapter: adapter({
			out: 'build/svelte'
		}),
		csrf: {
			checkOrigin: false,
		},
	}
};

export default config;
