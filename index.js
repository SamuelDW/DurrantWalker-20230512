#! /usr/bin/env node

import { Command } from 'commander'
import order from './commands/order.js'

const program = new Command()

// Create the program
program
	.name('csv-ordering')
	.description('Sorts a CSV')
	.version('0.1.0')

// create the specific command for the task
program
	.command('sort <file>')
	.description('Sorts a CSV')
	.option('-d, --delimiter [delimiter]', 'Value that separates CSV values', ',')
	.option('-f, --file-location [fileLocation]','Where you want the file writing to, default where the package is installed')
	.parse(process.argv)
	.action(order)

program.parse(process.argv)
