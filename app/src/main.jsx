import React from "react"
import ReactDOM from "react-dom"
import "virtual:windi.css"
import "./index.css"
import App from "./App"

import TokenProvider from "./contexts/TokenContext"

ReactDOM.render(
	<React.StrictMode>
		<TokenProvider>
			<App />

		</TokenProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
