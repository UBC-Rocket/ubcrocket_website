import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// BASE_PATH controls the URL prefix the built site is served from.
//  - Custom domain (www.ubcrocket.com) or <user>.github.io root: "/" (default)
//  - Project page without a custom domain (ubc-rocket.github.io/ubcrocket_website): "/ubcrocket_website/"
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
