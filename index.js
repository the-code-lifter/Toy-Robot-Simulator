const FileReader = require('./Models/FileReader')
const Table = require('./Models/Table')
const { splitCommandsIntoArray, runCommand } = require('./Helpers/Commands')

const fileReader = new FileReader()
const table = new Table()
const tableSize = {
	width: 5,
	height: 5,
}

fileReader.loadFile(() => {
	const commands = fileReader.getData()

	table.createTable(tableSize.width, tableSize.height)

	const arrayOfCommands = splitCommandsIntoArray(commands)

	arrayOfCommands.forEach((command) => runCommand(command, tableSize))
})
