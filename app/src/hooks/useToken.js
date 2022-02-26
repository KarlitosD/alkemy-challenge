import { useState } from "react"

import { setCookies, getCookie } from "../utils/cookies.js"

export default () => {
	const cookie = getCookie("token")
	const [token, setToken] = useState(cookie)


	const saveToken = tokenString => {
		setCookies({ token: "Bearer " + tokenString }, 60 * 60 * 24 * 7)
		setToken(tokenString)
	}
	return { token, saveToken }
}