import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" genera rutas relativas: el build funciona igual en la raíz del
// dominio o en una subcarpeta del hosting (Tigo / cPanel).
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
