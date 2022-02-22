export const setCookies = (obj, expiresIn) => {
	const [key, value] = Object.entries(obj)[0]
	document.cookie = `${key}=${value};max-age=${expiresIn}`
}

export const getCookie = keyCookie => {
	return document.cookie
		.split(";")
		.find(cookie => cookie.includes(keyCookie + "="))
		.split("=")[1]
}