import React, { createContext, useContext, useMemo } from "react"
import useSWR from "swr"

import { API_URL } from "../config"
import useToken from "../hooks/useToken"

const fetcher = (...data) => {
	try {
		const [url, options] = data
		return fetch(url, { ...options }).then(res => res.json())
	} catch (error) {
		return []
	}
}

export const OperationsContext = createContext(null)

const OperationsProvider = ({ children }) => {
	const { token } = useToken()
	const { data: operations, mutate } = useSWR([API_URL + "/operations/", {
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
			const newOperation = await fetcher(API_URL + "/operations/", {
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

	const deleteOperation = async id => {
		const operationsFiltered = operations.filter(operation => operation.id !== id)
		mutate(operationsFiltered, { revalidate: false })
		await fetcher(`${API_URL}/operations/${id}`, {
			method: "DELETE",
			mode: "cors",
			headers: {
				Authorization: token
			}
		})
	}

	const updateOperation = async (id, data) => {
		const copyOperations = JSON.parse(JSON.stringify(operations))
		const operationIndex = copyOperations.findIndex(operation => operation.id === id)
		Object.assign(copyOperations[operationIndex], data)
		copyOperations.sort((a, b) => new Date(b.date) - new Date(a.date))
		mutate(copyOperations, { revalidate: false })

		await fetcher(`${API_URL}/operations/${id}`, {
			method: "PATCH",
			mode: "cors",
			headers: {
				Authorization: token,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
	}

	return (
		<OperationsContext.Provider value={{ operations, addOperation, totalAmount, deleteOperation, updateOperation }}>
			{children}
		</OperationsContext.Provider>
	)
}

export const useOperation = () => useContext(OperationsContext)

export default OperationsProvider