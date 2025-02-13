import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],

  site: 'https://week.copsiitbhu.co.in/',

  vite: {
    plugins: [tailwindcss()],
  },
});
