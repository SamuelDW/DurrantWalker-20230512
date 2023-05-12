/**
 * Processes the CSV and for the purposes of this task
 * adds some additional info to support ease of development
 * @param {*} csvData
 * @param {string} delimiter default ',' to split the csv into
 * @returns {Array<{product_code: string, quantity: string, pick_location:string, row: string, shelf: string}>}
 */
const csvProcessor = (csvData, delimiter = ',') => {
	const data = splitCSV(csvData, delimiter)
	if (data.values.length === 0) return

	const dataAsObjects = objectsFromData(data.headers, data.values)
	const modifiedPickLocation = modifyPickLocation(dataAsObjects)

	return modifiedPickLocation
}

/**
 * splits a csv into a header array and values array returning an object keyed by header and values
 * @param {string} csvString
 * @param {string} delimiter
 * @returns {{headers: string[], values: string[]}} an object containing arrays of headers and values
 */
const splitCSV = (csvString, delimiter) => {
	const lines = csvString
		.split('\r\n')
		.map(line => line.replace(/,\s*$/, '').trim()) // remove trailing whitespace and commas at end of row

	const [headerLine, ...valueLines] = lines
	const headers = headerLine.split(',')
	const values = valueLines
		.map(line => line.split(delimiter))
		.filter(line => headers.length === line.length)

	return { headers, values }
}

/**
 * Maps the CSV data into a bit more useable array of objects
 * @param {string[]} headers
 * @param {string[]} values
 * @returns {Array<{product_code: string, quantity: string, pick_location:string}>}
 */
const objectsFromData = (headers, values) => {
	return values.map(currentLine => {
		const object = {}
		headers.forEach((header, index) => {
			object[header] = currentLine[index]
		})
		return object
	})
}

/**
 * This function splits out pick location into row and shelf, to make it easier to sort the values
 * These values will be removed
 * @param {Array<{pick_location: String, product_code: String, quantity: String}>} data the csv rows as objects
 * @returns @returns {Array<{product_code: string, quantity: string, pick_location:string, row: string, shelf: string}>}
 */
const modifyPickLocation = (data) => {
	return data.map(currentObject => {
		const { pick_location, ...rest } = currentObject
		const [row, shelf] = pick_location.split(' ')
		return {
			...rest,
			pick_location,
			row,
			shelf
		}
	})
}

export default csvProcessor

export {
	modifyPickLocation,
	objectsFromData,
	splitCSV,
}
