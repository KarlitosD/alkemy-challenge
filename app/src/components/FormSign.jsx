import React from "react"
import { useForm } from "react-hook-form"

import useToken from "../hooks/useToken"
import Button from "./Primitives/Button"

const REGEX_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

function FormSign({ inputs, operation }) {
	const { register, handleSubmit, formState: { errors } } = useForm()
	const { saveToken } = useToken()

	const onSubmit = async data => {
		const res = await fetch("http://localhost:4000/api/auth/" + operation, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data)
		})
		const { token } = await res.json()
		token && saveToken(token)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 align-baseline">
			{inputs.map(input => (
				<label htmlFor={input.id} key={input.key} className="px-2">
					<p>{input.placeholder}</p>
					<input {...register(input.id, { required: true, pattern: input.id === "email" && REGEX_EMAIL })} {...input} className="rounded w-full" />
					{errors[input.id] && <p className="mt-2 ml-1 text-red-500">{input.id} Campo invalido</p>}
				</label>
			))}
			<Button className="bg-blue-600 mx-2" isDark={true}>Ingresar</Button>
		</form>
	)
}

export default FormSign