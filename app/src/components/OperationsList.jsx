import React, { useState } from "react"
// import { useOperation } from "../contexts/OperationsContext"
// import clsx from "../utils/clsx"
import OperationItem from "./OperationItem"
import ModalEditOperation from "./ModalEditOperation"

function OperationsList({ operations }) {
	// const { operations } = useOperation()
	const [operationSelected, setOperationSelected] = useState(null)

	if (!operations || operations.status) return <div className="p-4 text-xl">Loading...</div>
	return (
		<>
			{operationSelected && <ModalEditOperation operationSelected={operationSelected} setOperationSelected={setOperationSelected} />}
			<div className="bg-white rounded h-full shadow-lg col-span-12 md:col-span-9 px-6 py-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100">
				{
					operations.length === 0
						? <div className="h-full grid place-content-center text-center text-4xl font-bold text-gray-500">No hay ninguna operacion</div>
						: operations.map(operation => (
							<OperationItem operation={operation} key={operation.id} setOperationSelected={setOperationSelected} />
						))
				}
			</div >
		</>
	)
}

export default OperationsList	