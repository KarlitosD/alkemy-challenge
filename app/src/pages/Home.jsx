import React, { useState, useMemo } from "react"
import { Redirect } from "wouter"

import NewOperationModal from "../components/NewOperationModal"
import ListOperations from "../components/ListOperations"
import Filters from "../components/Filters"
import Header from "../components/Header"
import Button from "../components/Primitives/Button"

import { useOperation } from "../contexts/OperationsContext"
import useToken from "../hooks/useToken"
import useUser from "../hooks/useUser"

const Home = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const { token } = useToken()
	const { operations, totalAmount } = useOperation()
	const { user } = useUser()
	
	const [category, setCategory] = useState("")
	const [type, setType] = useState({
		exit: true,
		income: true
	})
	
	const filteredOperations = useMemo(() => {
		console.log(operations)
		return  operations?.status ? [] : operations?.filter(operation => {
			const operationCategoryBoolean = (!category || operation.category === category)
			const operationTypeBoolean = type[operation.type]
			return operationCategoryBoolean && operationTypeBoolean
		})
	}, [operations, category, type]) 
	
	if (!token) return <Redirect to="/sign" />
	
	return (
		<div className="h-full">
			<Header />
			<div className="container p-4 mx-auto grid grid-cols-12 gap-4 h-[90%] auto-rows-max sm:auto-rows-auto">
				<aside className="col-span-12 sm:col-span-3 flex flex-col justify-evenly text-cent gap-10">
					<div className="bg-white rounded shadow p-4 text-center" >
						<div className="font-bold m-2 text-lg mb-4">
							<p>Hola {user?.username}</p>
							<p>Total: {totalAmount}</p>
						</div>
						<NewOperationModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
						<Button onClick={()  => setIsOpenModal(true)} className="bg-blue-600" isDark={true}>Agregar operacion</Button>
					</div>
					<div>
						<Filters type={type} setType={setType} category={category} setCategory={setCategory} />
					</div>
				</aside>
				<ListOperations operations={filteredOperations} />
			</div>
		</div>
	)
}

export default Home