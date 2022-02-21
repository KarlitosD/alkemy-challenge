import React, { useState } from "react"

const Home = () => {
	const [counter, setCounter] = useState(0)

	const handleClick = () => setCounter(counter + 1)
	return (
		<div className="text-center">
			<h1>Home</h1>
			<button onClick={handleClick} className=" rounded-xl bg-red-500 py-2 px-4">Counter: {counter}</button>
		</div>
	)
}

export default Home