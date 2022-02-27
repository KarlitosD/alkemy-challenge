export const setCookies = (obj, expiresIn) => {
	const [key, value] = Object.entries(obj)[0]
	document.cookie = `${key}=${value};max-age=${expiresIn}`
}

export const getCookie = keyCookie => {
	return document.cookie
		.split(";")
		.find(cookie => cookie.includes(keyCookie + "="))
		?.split("=")[1]
}

export const deleteCookie = keyCookie => {
	document.cookie = keyCookie + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}