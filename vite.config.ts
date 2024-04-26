import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.VITE_BACKEND_URL': process.env.VITE_BACKEND_URL,
	  },
});