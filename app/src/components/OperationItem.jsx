import React from "react"
import clsx from "../utils/clsx"
import { useOperation } from "../contexts/OperationsContext"
function OperationItem({ operation, setOperationSelected }) {
	const { deleteOperation } = useOperation()
	const bool = operation.type === "income"

	const openModal = () => {
		setOperationSelected(operation)
	}

	return (
		<div className="flex my-2 py-2 text-left w-full x justify-between items-center ">
			<div>
				<p>{operation.concept}</p>
				<p className="text-sm text-dark-50">{operation.date}</p>
			</div>
			<div className="text-center">
				<p className={clsx("font-bold text-lg rounded p-1", bool ? "bg-green-300 text-green-600" : "bg-red-300 text-red-700")}>{(bool ? "+" : "-") + operation.amount}</p>
				<div display="flex gap-1 justify-center">
					<button className="text-sm text-white bg-blue-700 px-[1px]" onClick={openModal}>E</button>
					<button className="text-sm text-white bg-red-700 px-[1px]" onClick={() => deleteOperation(operation.id)}>X</button>
				</div>
			</div>
		</div>
	)
}

export default OperationItem