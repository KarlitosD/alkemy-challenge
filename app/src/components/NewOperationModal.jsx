import React, { useState } from "react"
import { Dialog, Switch } from "@headlessui/react"
import { useForm } from "react-hook-form"
import OptionsCategories from "./OptionsCategories"
import { useOperation } from "../contexts/OperationsContext"
import clsx from "../utils/clsx"

function NewOperationModal({ isOpenModal, setIsOpenModal }) {
	const [enabled, setEnabled] = useState(false)
	const { handleSubmit, register, reset } = useForm()

	const { addOperation } = useOperation()

	const onSubmit = async data => {
		await addOperation({ data, enabled })
		reset()
		setIsOpenModal(false)
	}
	return (
		<Dialog
			open={isOpenModal}
			onClose={() => setIsOpenModal(false)}
			className="inset-0 z-10 fixed overflow-y-auto"
		>
			<div className="min-h-screen grid place-content-center">
				<Dialog.Overlay className="bg-black opacity-60 inset-0 fixed" />

				<div className="bg-white rounded mx-auto max-w-sm px-5 relative text-dark-200">
					<Dialog.Title className="font-black">Agrega una operacion</Dialog.Title>

					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
						<input type="text" className="rounded h-8 my-2 w-54" {...register("concept", { required: true })} autoComplete="off" />
						<input type="number" className="rounded h-8 my-2 w-54" min="0" {...register("amount", { required: true })} />
						<input type="date" className="rounded h-8 my-2 w-54" {...register("date", { required: true })} />
						<select className="rounded h-8 my-2 px-3 w-54 overflow-y-scroll"  {...register("category", { required: true })} >
							<option value="Ninguna" hidden>Categoria</option>
							<OptionsCategories />
						</select>
						<Switch.Group as="div" className="flex items-center">
							<Switch.Label className="mr-2">Ingreso</Switch.Label>
							<Switch
								checked={enabled}
								onChange={setEnabled}
								className={clsx(enabled ? "bg-red-500" : "bg-green-500", "relative inline-flex items-center rounded-full h-6 w-12 transition-colors outline-none")}
							>
								<span
									className={clsx(enabled ? "translate-x-6" : "translate-x-1", "inline-block w-5 h-5 transform bg-white rounded-full transition-transform")}
								/>
							</Switch>
							<Switch.Label className="ml-2">Egreso</Switch.Label>
						</Switch.Group>
						<button className="rounded bg-blue-700 mt-2 mb-3 mt-4 text-white py-1 px-4 w-11/12">Agregar</button>
					</form>
				</div>
			</div>
		</Dialog	>
	)
}

export default NewOperationModal