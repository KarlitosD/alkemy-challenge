import React from "react"
import { Link, Route } from "wouter"

import Home from "./pages/Home"
import Sign from "./pages/Sign"

function App() {

	return (
		<div className="h-screen bg-blue-900 text-white">
			<header className="border-b-black border-transparent flex border-2 py-2 gap-4 justify-center">
				<Link to="/home" className="text-white">Home</Link>
				<Link to="/sign" className="text-white">Sign</Link>
			</header>
			<div className="flex h-full items-center justify-center ">
				<Route path="/home" component={Home}></Route>
				<Route path="/sign" component={Sign}></Route>
			</div>
		</div>
	)
}

export default App
