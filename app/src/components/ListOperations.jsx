import React, { useState } from "react"
// import { useOperation } from "../contexts/OperationsContext"
// import clsx from "../utils/clsx"
import OperationItem from "./OperationItem"
import EditOperationModal from "./EditOperationModal"

function ListOperations({ operations }) {
	// const { operations } = useOperation()
	const [operationSelected, setOperationSelected] = useState(null)

	if (!operations || operations.status) return <div>Loading</div>
	return (
		<>
			{operationSelected && <EditOperationModal operationSelected={operationSelected} setOperationSelected={setOperationSelected} />}
			<div className="bg-white rounded h-full shadow-lg col-span-12 sm:col-span-9 px-6 py-4 overflow-y-scroll">
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

export default ListOperations	