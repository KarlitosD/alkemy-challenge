export const setCookies = (obj, expiresIn) => {
	const [key, value] = Object.entries(obj)[0]
	document.cookie = `${key}=${value};max-age=${expiresIn}`
}