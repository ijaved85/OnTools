import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,   // allows access from other devices on Wi-Fi
    port: 5173,   // optional
  },
});