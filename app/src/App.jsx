import React from "react"
import { Switch, Route, Redirect } from "wouter"

import Home from "./pages/Home"
import Sign from "./pages/Sign"

function App() {
	return (
		<div className="h-screen bg-light-400">
			<Switch>
				<Route path="/" component={() => <Redirect to="/home" />} />
				<Route path="/home" component={Home}></Route>
				<Route path="/sign" component={Sign}></Route>
			</Switch>
		</div>
	)
}

export default App
