import { defineConfig } from 'vite';

import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';
import postcss from '@vituum/vite-plugin-postcss'

export default defineConfig({
    build: {
        assetsInlineLimit: 0,
    },
    plugins: [
        vituum(),
        nunjucks(),
        postcss(),
    ],
})