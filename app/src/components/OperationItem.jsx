import React from "react"
import clsx from "../utils/clsx"
import { formatDate } from "../utils/formatDate"
import { useOperation } from "../contexts/OperationsContext"
import { Menu } from "@headlessui/react"

function OperationItem({ operation, setOperationSelected }) {
	const { deleteOperation } = useOperation()
	const bool = operation.type === "income"

	const openModal = () => setOperationSelected(operation)

	return (
		<div className="flex my-2 py-2 text-left w-full x justify-between items-center ">
			<div>
				<p>{operation.concept}</p>
				<p className="text-sm text-dark-50">{formatDate(operation.date)}</p>
			</div>
			<div className="text-center flex">
				<p className={clsx("font-bold text-lg rounded py-1 px-2", bool ? "bg-green-300 text-green-600" : "bg-red-300 text-red-700")}>{(bool ? "+" : "-") + operation.amount}</p>
				<Menu as="div" className="relative inline-block text-left">
					<Menu.Button className="flex justify-center w-full px-4 py-2 text-sm font-medium text-dark-600 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none ">
						...
					</Menu.Button>

					<Menu.Items className="absolute right-8 bottom-[-0.25rem] w-auto origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
						<div className="p-1 ">
							<Menu.Item>
								<button
									className={"hover:(text-blue-600) text-gray-900 group flex rounded-md items-center p-1 text-sm"}
									onClick={openModal}
								>
									Editar
								</button>
							</Menu.Item>
							<Menu.Item>
								<button
									className={"hover:(text-red-600) group rounded-md flex items-center p-1 text-sm text-center"}
									onClick={() => deleteOperation(operation.id)}
								>
									Borrar
								</button>
							</Menu.Item>
						</div>

					</Menu.Items>
				</Menu>
			</div>
		</div>
	)
}

export default OperationItem