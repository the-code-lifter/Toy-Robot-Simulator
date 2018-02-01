const FileReader = require('./Models/FileReader')

const fileReader = new FileReader()

fileReader.loadFile(() => {
  const commands = fileReader.getData()

  console.log(commands)
})