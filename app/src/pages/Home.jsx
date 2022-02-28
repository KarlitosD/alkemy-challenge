import React, { useState } from "react"
import { Redirect } from "wouter"

import useToken from "../hooks/useToken"
import NewOperationModal from "../components/NewOperationModal"
import ListOperations from "../components/ListOperations"

import { useOperation } from "../contexts/OperationsContext"
import Header from "../components/Header"


const Home = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const { token } = useToken()

	const { totalAmount } = useOperation()

	if (!token) return <Redirect to="/sign" />

	const handleClick = () => setIsOpenModal(true)
	return (
		<div className="h-full">
			<Header />
			<div className=" mx-auto flex justify-center py-6 px-20 gap-10 h-[95%] max-w-5xl w-9/12 sm:w-10/12 ">
				<aside >
					<div className="bg-white rounded shadow py-5 px-4" >
						<h1 className=" font-bold mx-1 text-lg mb-5 w-8/12"> Total: {totalAmount}</h1>
						<NewOperationModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
						<button onClick={handleClick} className=" rounded bg-blue-500 text-white py-2 px-4">Agregar operacion</button>
					</div>
					<div>
						controles
					</div>
				</aside>
				<ListOperations />
			</div>
		</div>
	)
}

export default Home