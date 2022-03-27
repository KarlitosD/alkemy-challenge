import React from "react"
import { Redirect } from "wouter"
import { Tab } from "@headlessui/react"
import clsx from "../utils/clsx"

import useToken from "../hooks/useToken"
import FormSign from "../components/FormSign"

const Sign = () => {
	const { token } = useToken()

	const forms = {
		"Login": [
			{
				key: 1,
				id: "email",
				type: "email",
				placeholder: "Email",
			},
			{
				key: 2,
				id: "password",
				type: "password",
				placeholder: "Contraseña",
			},
		],
		"Register": [
			{
				key: 3,
				id: "username",
				type: "text",
				placeholder: "Nombre de usuario",
			},
			{
				key: 4,
				id: "email",
				type: "email",
				placeholder: "Email",
			},
			{
				key: 5,
				id: "password",
				type: "password",
				placeholder: "Contraseña",
			},
		]
	}

	if (token) return <Redirect to="/home" />

	return (
		<div className="flex h-full items-center justify-center">
			<Tab.Group as="div" className="max-w-md w-full py-16 px-2 text-dark-900 md:px-0">
				<Tab.List className="rounded-xl flex space-x-1 bg-white p-1">
					{Object.keys(forms).map((form) => (
						<Tab
							key={form}
							className={({ selected }) =>
								clsx(
									"w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg",
									"outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
									selected
										? "bg-blue-600 shadow"
										: "text-dark-100 hover:bg-600/[0.12] hover:text-dark-900"
								)
							}
						>
							{form}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.entries(forms).map(([key, inputs], idx) => (
						<Tab.Panel
							key={idx}
							className={clsx(
								"bg-white rounded-xl px-3 py-6 flex flex-col justify-center",
								"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 h-80"
							)}
						>
							<FormSign inputs={inputs} operation={key.toLowerCase()} />
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}

export default Sign