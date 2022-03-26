import useSWR from "swr"
import useToken from "./useToken"

function jwtDecode(t) {
	let token = {}
	token.raw = t.split(" ")[1]
	token.header = JSON.parse(window.atob(token.raw.split(".")[0]))
	token.payload = JSON.parse(window.atob(token.raw.split(".")[1]))
	return token
}

export default () => {
	const { token } = useToken()
	const { data: user } = useSWR("user", () => {
		const { iat, exp, ...user } = jwtDecode(token).payload
		return user
	})

	return { user }
}