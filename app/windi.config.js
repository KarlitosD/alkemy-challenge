import { defineConfig } from "windicss/helpers"
import formsPlugin from "windicss/plugin/forms"
import scrollbarPlugin from "@windicss/plugin-scrollbar"

export default defineConfig({
	attributify: true,
	plugins: [formsPlugin, scrollbarPlugin],
})