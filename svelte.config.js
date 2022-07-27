import preprocess from "svelte-preprocess";
import sveltePreprocess from 'svelte-preprocess'

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
    sveltePreprocess(),
  ],
}

export default config;