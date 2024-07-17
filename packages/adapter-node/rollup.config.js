import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { builtinModules } from 'node:module';

export default [
	{
		input: 'src/index.js',
		output: {
			file: 'files/index.js',
			format: 'esm'
		},
		plugins: [nodeResolve({ preferBuiltins: true }), commonjs(), json()],
		external: ['ENV', 'HANDLER', ...builtinModules]
	},
	{
		input: 'src/env.js',
		output: {
			file: 'files/env.js',
			format: 'esm'
		},
		plugins: [nodeResolve(), commonjs(), json()],
		external: ['HANDLER', ...builtinModules]
	},
	{
		input: 'src/handler.js',
		output: {
			file: 'files/handler.js',
			format: 'esm',
			inlineDynamicImports: true
		},
		plugins: [nodeResolve(), commonjs(), json()],
		external: ['ENV', 'MANIFEST', 'SERVER', 'SHIMS', '@adonisjs/core/http', ...builtinModules]
	},
	{
		input: 'src/shims.js',
		output: {
			file: 'files/shims.js',
			format: 'esm'
		},
		plugins: [nodeResolve(), commonjs()],
		external: builtinModules
	}
];
