import useSWR from "swr"
import { setCookies, getCookie, deleteCookie } from "../utils/cookies.js"

export default () => {
	const { data: token, mutate } = useSWR("token", key => getCookie(key))

	const saveToken = tokenString => {
		setCookies({ token: "Bearer " + tokenString }, 60 * 60 * 24 * 7)
		mutate("Bearer " + tokenString)
	}

	const deleteToken = () => {
		deleteCookie("token")
		mutate(undefined, { revalidate: false })
	}

	return { token, saveToken, deleteToken }
}