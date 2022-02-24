import React from "react"
import { Redirect } from "wouter"
import { Tab } from "@headlessui/react"
import clsx from "clsx"

import { useToken } from "../contexts/TokenContext"
import FormSign from "../components/FormSign"

const Sign = () => {
	const { token } = useToken()

	const forms = {
		Login: [
			{
				key: 1,
				id: "email",
				type: "email",
				placeholder: "Your email",
			},
			{
				key: 2,
				id: "password",
				type: "password",
				placeholder: "Your password",
			},
		],
		Register: [
			{
				key: 3,
				id: "username",
				type: "text",
				placeholder: "Your username",
			},
			{
				key: 4,
				id: "email",
				type: "email",
				placeholder: "Your email",
			},
			{
				key: 5,
				id: "password",
				type: "password",
				placeholder: "Your password",
			},
		]
	}

	if (token) return <Redirect to="/home" />

	return (
		<div className="max-w-md w-full py-16 px-2 text-dark-900 sm:px-0">
			<Tab.Group>
				<Tab.List className="rounded-xl flex space-x-1 bg-blue-900/20 p-1">
					{Object.keys(forms).map((form) => (
						<Tab
							key={form}
							className={({ selected }) =>
								clsx(
									"w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
									"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
									selected
										? "bg-white shadow"
										: "text-blue-100 hover:bg-white/[0.12] hover:text-white"
								)
							}
						>
							{form}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.entries(forms).map(([hola, inputs], idx) => (
						<Tab.Panel
							key={idx}
							className={clsx(
								"bg-white rounded-xl px-3 py-6",
								"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
							)}
						>
							<FormSign inputs={inputs} operation={hola.toLowerCase()} />
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}

export default Sign