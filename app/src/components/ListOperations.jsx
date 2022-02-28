import React, { useState } from "react"
import { useOperation } from "../contexts/OperationsContext"
// import clsx from "../utils/clsx"
import OperationItem from "./OperationItem"
import EditOperationModal from "./EditOperationModal"

function ListOperations() {
	const { operations } = useOperation()
	const [operationSelected, setOperationSelected] = useState(null)

	if (!operations || operations.status) return <div>Loading</div>
	return (
		<>
			{operationSelected && <EditOperationModal operationSelected={operationSelected} setOperationSelected={setOperationSelected} />}
			<div className="bg-white rounded h-full shadow-lg w-full px-6 py-4 overflow-y-scroll ">
				{
					operations.map(operation => (
						<OperationItem operation={operation} key={operation.id} setOperationSelected={setOperationSelected} />
					))
				}
			</div >
		</>
	)
}

export default ListOperations	