const FileReader = require('./Models/FileReader')
const Table = require('./Models/Table')
const { splitCommandsIntoArray } = require('./Helpers/Commands')

const fileReader = new FileReader()
const table = new Table()

fileReader.loadFile(() => {
  const commands = fileReader.getData()

  table.createTable(5, 5)

  const arrayOfCommands = splitCommandsIntoArray(commands)

  arrayOfCommands.forEach(element => {
    console.log(element)
  });
})