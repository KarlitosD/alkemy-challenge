import React from "react"
import { useForm } from "react-hook-form"
import { Dialog } from "@headlessui/react"

import { useOperation } from "../contexts/OperationsContext"
import OptionsCategories from "./OptionsCategories"

function ModalEditOperation({ operationSelected: operation, setOperationSelected }) {
	const { handleSubmit, register } = useForm()
	const { updateOperation } = useOperation()

	const onSubmit = data => {
		updateOperation(operation.id, data)
		setOperationSelected(null)

	}
	return (
		<Dialog open={Boolean(operation)} onClose={() => setOperationSelected(null)} className="fixed z-10 inset-0 overflow-y-auto">

			<div className="flex items-center justify-center min-h-screen">
				<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
				<div className="relative bg-white rounded max-w-md">
					<Dialog.Title className="text-center mt-4 mb-2">Editar operacion</Dialog.Title>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6">
						<input type="text" className="rounded h-8 my-2 w-53" {...register("concept", { required: true, value: operation.concept })} autoComplete="off" />
						<input type="number" className="rounded h-8 my-2 w-53" min="0" {...register("amount", { required: true, value: operation.amount })} />
						<input type="date" className="rounded h-8 my-2 w-53 overflow-y-scroll" {...register("date", { required: true, value: operation.date })} />
						<select className="rounded h-8 my-2 px-3 w-53"  {...register("category", { required: true, value: operation.category })} >
							<OptionsCategories />
						</select>

						<div className="flex my-2 gap-1">
							<button className="w-full py-1 bg-red-500 text-white rounded" onClick={() => setOperationSelected(null)}>Cancelar</button>
							<button className="w-full py-1 bg-blue-500 text-white rounded">Guardar</button>
						</div>
					</form>
				</div>
			</div>
		</Dialog>
	)
}

export default ModalEditOperation