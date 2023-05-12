import chalk from 'chalk'
import fs from 'fs'
import fse from 'fs-extra'
import csvProcessor from '../utils/csvProcessor.js'
import sortValues from '../utils/sortData.js'
import cleanObjects, { objectsToCsv } from '../utils/objectUtilities.js'

/**
 * Orders a CSV file to find optimal route summing duplicates
 * @param {*} csv
 * @param {Object} options
 * @returns null
 */
const order = (csv, options) => {
	let csvData = ''
	try {
		csvData = fs.readFileSync(csv, 'utf-8')
	} catch (err) {
		console.error(chalk.red('Error reading the CSV file:'), err)
	}

	const delimiter = options.delimiter || ','
	const values = csvProcessor(csvData, delimiter)

	if (!values) {
		console.error(chalk.yellow('No data present'))
		process.exit()
	}
	const sorted = sortValues(values)

	const keysToRemove = {row: true, shelf: true}
	const cleanedObjects = cleanObjects(sorted, keysToRemove)

	const csvDataForInsert = objectsToCsv(cleanedObjects)
	const filename = options.fileLocation ? `${options.fileLocation}/test${Date.now()}.csv` :  `test${Date.now()}.csv`

	try {
		fse.outputFileSync(filename, csvDataForInsert)
		console.log(chalk.green('File written successfully:'), filename)
	} catch (err) {
		console.error(chalk.red('Error creating/writing to the CSV file:'), err)
	}
}

export default order
