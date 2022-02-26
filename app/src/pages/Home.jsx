import React, { useState } from "react"
import { Redirect } from "wouter"
import { useToken } from "../hooks/useToken"
import NewOperationModal from "../components/NewOperationModal"

const Home = () => {
	const [isOpenModal, setIsOpenModal] = useState(true)
	const { token } = useToken()

	if (!token) return <Redirect to="/sign" />

	const handleClick = () => setIsOpenModal(true)
	return (
		<div className="text-center">
			<NewOperationModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
			<h1>Home</h1>
			<button onClick={handleClick} className=" rounded bg-red-600 py-2 px-4">Agregar operacion</button>
		</div>
	)
}

export default Home