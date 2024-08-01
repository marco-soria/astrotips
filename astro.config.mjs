import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import EventEmitter from 'events';
import sitemap from "@astrojs/sitemap";
EventEmitter.defaultMaxListeners = 20;

// Capturar y mostrar warnings
process.on('warning', (warning) => {
  console.warn(warning.name);    // Ejemplo: MaxListenersExceededWarning
  console.warn(warning.message); // Ejemplo: Possible EventEmitter memory leak detected.
  console.warn(warning.stack);   // Stack trace
});




// https://astro.build/config
export default defineConfig({
  site: 'https://astrobuild',
  integrations: [tailwind(), mdx(), react(), vue(), svelte(), sitemap()]
});