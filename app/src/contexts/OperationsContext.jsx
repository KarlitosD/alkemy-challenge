import React, { createContext, useContext, useMemo } from "react"
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

	const totalAmount = useMemo(() => {
		if (!token) return 0
		return operations?.reduce((acc, { amount, type }) => {
			return acc + amount * (type === "exit" ? -1 : 1)
		}, 0)
	}, [operations])

	const addOperation = async ({ enabled, data }) => {
		mutate(async () => {
			const newOperation = await fetcher("http://localhost:4000/api/operations/", {
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
			})

			return [...operations, newOperation]
		})
	}

	return (
		<OperationsContext.Provider value={{ operations, addOperation, totalAmount }}>
			{children}
		</OperationsContext.Provider>
	)
}

export const useOperation = () => useContext(OperationsContext)

export default OperationsProvider