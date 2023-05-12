/**
 * Sorts the values alphabetically and numerically whilst combining duplicates
 * @param {Array} data
 * @returns Array<{product_code: string, quantity: string, pick_location:string, row: string, shelf: string}>
 */
const sortValues = (data) => {
	const removedDuplicates = combineDuplicates(data)
	const sortedAlphabetically = orderCharacters(removedDuplicates)
	const sortedNumerically = orderNumeric(sortedAlphabetically)

	return sortedNumerically
}

/**
 * Orders the objects according to the row number from A - AZ
 * @param {Array<{product_code: string, quantity: string, pick_location:string, row: string, shelf: string}>} data
 * @returns {Array<{product_code: string, quantity: string, pick_location:string, row: string, shelf: string}>}
 */
const orderCharacters = (data) => {
	return data.sort(function(a, b) {
		if (a.row.length !== b.row.length) {
			return a.row.length - b.row.length
		} else {
			return a.row.localeCompare(b.row)
		}
	})
}

/**
 * Duplicate product_codes get combined and their quantities summed
 * @param {Array<{product_code: string, quantity: string, pick_location:string, row: string, shelf: string}>} products
 * @returns Array<{product_code: string, quantity: string, pick_location:string, row: string, shelf: string}>
 */
const combineDuplicates = (products) => {
	const productMap = new Map()

	for (const product of products) {
		const { product_code, quantity } = product
		const parsedQuantity = parseInt(quantity)

		if (productMap.has(product_code)) {
			productMap.get(product_code).quantity += parsedQuantity
		} else {
			productMap.set(product_code, { ...product, quantity: parsedQuantity })
		}
	}

	return Array.from(productMap.values())
}

/**
 * Orders the products from 1 - 10 according to alphabetical order
 * @param {Array<{product_code: string, quantity: string, pick_location:string, row: string, shelf: string}>} products
 * @returns Array<{product_code: string, quantity: string, pick_location:string, row: string, shelf: string}>
 */
const orderNumeric = (products) => {
	const rowMap = new Map()

	products.forEach((product) => {
		const { row } = product
		const lowercaseRow = row.toLowerCase()

		if (!rowMap.has(lowercaseRow)) {
			rowMap.set(lowercaseRow, [])
		}

		rowMap.get(lowercaseRow).push(product)
	})

	const sortedProducts = Array.from(rowMap.values())
		.flatMap((productsInRow) =>
			productsInRow.sort((a, b) => parseInt(a.shelf) - parseInt(b.shelf))
		)

	return sortedProducts
}

export default sortValues

export {
	orderNumeric,
	orderCharacters,
	combineDuplicates,
}
