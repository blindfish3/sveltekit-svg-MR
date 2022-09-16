import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/icons/'],
			svgoOptions: {
				multipass: true,
				plugins: [{
				  name: "preset-default",
				  params: { overrides: { removeViewBox: false } }
				},
				{ name: "removeAttrs", params: { attrs: "(fill|stroke)" } }],
			  },
		}),
	]
};

export default config;
