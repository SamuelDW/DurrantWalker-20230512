/**
 *
 * @param {Array<Object>} arr
 * @param {Object} keysToRemove
 * @returns {Array<{product_code: string, quantity: string, pick_location:string}>}
 */
const cleanObjects = (arr, keysToRemove) => {
	return arr.map(obj => {
		const newObj = {}
		for (let key in obj) {
			// eslint-disable-next-line no-prototype-builtins
			if (!keysToRemove.hasOwnProperty(key)) {
				newObj[key] = obj[key]
			}
		}
		return newObj
	})
}

/**
 * Converets the array of objects into something writeable to a CSV
 * @param {Array<{product_code: string, quantity: string, pick_location:string, row: string, shelf: string}>} data
 * @returns String
 */
const objectsToCsv = (data) => {
	const snakeCase = str => str.replace(/ /g, '_').toLowerCase()

	const headers = Object.keys(data[0]).map(snakeCase)
	const rows = data.map(obj => headers.map(header => obj[header]))

	const csvRows = [headers, ...rows]
	const csvString = csvRows.map(row => row.join(',')).join('\n')

	return csvString
}

export default cleanObjects

export {
	objectsToCsv,
}
