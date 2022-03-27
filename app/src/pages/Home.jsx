import React, { useState, useMemo } from "react"
import { Redirect } from "wouter"

import ModalNewOperation from "../components/ModalNewOperation"
import OperationsList from "../components/OperationsList"
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
			<div className="container lg:p-4 mx-auto grid grid-cols-12 gap-6 md:gap-8 h-[90%] auto-rows-max md:auto-rows-auto">
				<aside className="col-span-12 md:col-span-3 flex flex-col justify-center gap-3 md:gap-15">
					<div className="bg-white rounded shadow py-10 text-center" >
						<div className="font-bold m-2 text-lg mb-4">
							<p>Hola <span className="text-blue-600 mb-2 font-black">{user?.username}</span></p>
							<p>Dinero disponible:</p>
							<p className="text-gray-400">$ {totalAmount}</p>
						</div>
						<ModalNewOperation isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
						<Button onClick={()  => setIsOpenModal(true)} className="bg-blue-600 p-2" isDark={true}>Agregar operacion</Button>
					</div>
					<div className="bg-white rounded shadow px-6 py-8">
						<Filters type={type} setType={setType} category={category} setCategory={setCategory} />
					</div>
				</aside>
				<OperationsList operations={filteredOperations} />
			</div>
		</div>
	)
}

export default Home