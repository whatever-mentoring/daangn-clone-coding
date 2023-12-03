import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteFaviconsPlugin } from "vite-plugin-favicon";

export default defineConfig({
  plugins: [
    react(),
    ViteFaviconsPlugin({
      logo: "public/assets/logo.png",
    }),
  ],
});
