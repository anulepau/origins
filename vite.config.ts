import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	// comment out below 'server' property if using MacOS
	server: {
    watch: {
        usePolling: true
    }
	}
};

export default config;
