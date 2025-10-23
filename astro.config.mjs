// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';


import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['3yagsb-ip-201-229-250-234.tunnelmole.net']
    },
  },

  integrations: [icon()],
  adapter: vercel()
});