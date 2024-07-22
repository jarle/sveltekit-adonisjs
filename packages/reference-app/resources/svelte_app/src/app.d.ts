import { App as MatStackApp } from '@matstack/sveltekit-adonisjs/types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform extends MatStackApp.Platform { }
	}
}

export { };

