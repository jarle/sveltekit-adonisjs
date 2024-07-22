import { Adapter } from '@sveltejs/kit';
import './ambient.js';

import type { Container } from '@adonisjs/core/container';
import type { HttpContext } from '@adonisjs/core/http';
import type { ContainerBindings } from '@adonisjs/core/types';

declare global {
	const ENV_PREFIX: string;
}

interface AdapterOptions {
	out?: string;
	precompress?: boolean;
	envPrefix?: string;
}

declare namespace App {
	export interface Platform {
		http: HttpContext
		make: Container<ContainerBindings>['make']
	}
}

export default function plugin(options?: AdapterOptions): Adapter;
