const FileReader = require('./Models/FileReader')
const Table = require('./Models/Table')

const fileReader = new FileReader()
const table = new Table()

fileReader.loadFile(() => {
  const commands = fileReader.getData()

  table.createTable(5, 5)

  console.log(table.getTable())
})