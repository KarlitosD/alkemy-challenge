import React, { createContext, useState, useContext, useEffect } from "react"
import { setCookies } from "../utils/cookies.js"


export const TokenContext = createContext(null)

const TokenProvider = ({ children }) => {
	const [token, setToken] = useState("")

	useEffect(() => {
		const cookie = document.cookie.split("=")[1]
		setToken(cookie)
	}, [])

	const saveToken = tokenString => {
		setCookies({ token: "Bearer " + token }, 60 * 60 * 24 * 7)
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