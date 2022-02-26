import React from "react"
import ReactDOM from "react-dom"
import "virtual:windi.css"
import "./index.css"
import App from "./App"

import OperationsProvider from "./contexts/OperationsContext"

ReactDOM.render(
	<React.StrictMode>
		<OperationsProvider>
			<App />
		</OperationsProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
