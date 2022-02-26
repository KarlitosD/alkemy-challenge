import React, { createContext, useContext } from "react"
import useSWR from "swr"

import useToken from "../hooks/useToken"

const fetcher = (...data) => {
	const [url, options] = data
	return fetch(url, { ...options }).then(res => res.json())
}

export const OperationsContext = createContext(null)

const OperationsProvider = ({ children }) => {
	const { token } = useToken()
	const { data: operations, mutate } = useSWR(["http://localhost:4000/api/operations/", {
		mode: "cors",
		headers: {
			"Authorization": token
		}
	}], fetcher)

	const addOperation = async ({ enabled, data }) => {
		return mutate(async () => {
			const newOperation = await fetch("http://localhost:4000/api/operations/", {
				method: "POST",
				mode: "cors",
				headers: {
					Authorization: token,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					...data,
					type: enabled ? "exit" : "income"
				})
			}).then(res => res.json())

			return [...operations, newOperation]
		})

	}


	return (
		<OperationsContext.Provider value={{ operations, addOperation }}>
			{children}
		</OperationsContext.Provider>
	)
}

export const useOperation = () => useContext(OperationsContext)

export default OperationsProvider