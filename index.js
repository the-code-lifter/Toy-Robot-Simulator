const FileReader = require('./Models/FileReader')
const Table = require('./Models/Table')
const Robot = require('./Models/Robot')
const { splitCommandsIntoArray, runCommand } = require('./Helpers/Commands')

const fileReader = new FileReader()
const table = new Table()
const robot = new Robot()

fileReader.loadFile(() => {
	const commands = fileReader.getData()
	table.createTable(5, 5)
	const arrayOfCommands = splitCommandsIntoArray(commands)

	arrayOfCommands.forEach((command) => runCommand(command, table, robot))
})
