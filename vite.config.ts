import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tanstackStart(), nitro(), react(), tailwindcss()],
  resolve: { tsconfigPaths: true },
  server: { port: 3000 },
  nitro: {
    routeRules: {
      "/.well-known/matrix/client": {
        cors: true,
        headers: { "content-type": "application/json" },
      },
      "/.well-known/matrix/server": {
        cors: true,
        headers: { "content-type": "application/json" },
      },
    },
  },
});
