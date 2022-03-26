export const formatDate = date => {
	const dateUnformat = new Date(date)

	const day = dateUnformat.getDate()
	const month = dateUnformat.getMonth() + 1
	const year = dateUnformat.getFullYear()

	return `${day}/${month}/${year}`

}