import type { Container } from '@adonisjs/core/container';
import type { HttpContext } from '@adonisjs/core/http';
import type { ContainerBindings } from '@adonisjs/core/types';

declare namespace App {
	export interface Platform {
		http: HttpContext;
		make: Container<ContainerBindings>['make']
	}
}
