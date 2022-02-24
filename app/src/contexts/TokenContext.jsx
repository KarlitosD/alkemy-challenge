import React, { createContext, useState, useContext, useEffect } from "react"
import { setCookies, getCookie } from "../utils/cookies.js"

export const TokenContext = createContext(null)

const TokenProvider = ({ children }) => {
	const [token, setToken] = useState("")

	useEffect(() => {
		const cookie = getCookie("token")
		setToken(cookie)
	}, [])

	const saveToken = tokenString => {
		setCookies({ token: "Bearer " + tokenString }, 60 * 60 * 24 * 7)
		setToken(tokenString)
	}
	return (
		<TokenContext.Provider value={{ saveToken, token }}>
			{children}
		</TokenContext.Provider>
	)
}

export const useToken = () => useContext(TokenContext)

export default TokenProvider