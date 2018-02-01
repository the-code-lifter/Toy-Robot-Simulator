const FileReader = require('./Models/FileReader')
const Table = require('./Models/Table')

const fileReader = new FileReader()
const table = new Table()

fileReader.loadFile(() => {
  const commands = fileReader.getData()
  table.createTable()
  console.log(table.getTable())
})