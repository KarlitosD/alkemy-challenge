import useSWR from "swr"
import { setCookies, getCookie } from "../utils/cookies.js"

export default () => {
	const { data: token, mutate } = useSWR("token", key => getCookie(key))

	const saveToken = tokenString => {

		setCookies({ token: "Bearer " + tokenString }, 60 * 60 * 24 * 7)
		mutate("Bearer " + tokenString)
	}

	return { token, saveToken }
}