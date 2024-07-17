import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig(() => ({
  server: {
    fs: {
      allow: ['resources/svelte_app'],
    },
  },
  plugins: [
    sveltekit(),
  ]
}))
