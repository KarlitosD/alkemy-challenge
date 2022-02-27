import React from "react"
import { Switch, Route } from "wouter"

import Home from "./pages/Home"
import Sign from "./pages/Sign"

function App() {

	return (
		<div className="h-screen bg-light-400">
			{/* <header className="border-b-black border-transparent flex border-2 py-2 gap-4 justify-center">
				<Link to="/home" className="text-white">Home</Link>
				<Link to="/sign" className="text-white">Sign</Link>
			</header> */}
			<Switch >
				<Route path="/home" component={Home}></Route>
				<Route path="/sign" component={Sign}></Route>
			</Switch>

		</div >
	)
}

export default App
