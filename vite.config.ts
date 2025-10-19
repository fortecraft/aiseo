import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import Unfonts from "unplugin-fonts/vite"

const env = loadEnv("", process.cwd(), "")
const base = env.VITE_PATH

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    Unfonts({
      google: {
        families: [{ name: "Inter", styles: "wght@400;500;600;700" }],
      },
    }),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "motion"],
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
})
