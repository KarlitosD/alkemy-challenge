import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import WindiCSS from "vite-plugin-windicss"
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), WindiCSS(), svgrPlugin({
      svgrOptions: {
        icon: true,
      }
    })]
})