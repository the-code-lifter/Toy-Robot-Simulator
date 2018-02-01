const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, '../commands.txt')

module.exports = class FileReader {
  constructor() {
    this.file = null
  }

  loadFile(cb) {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, commands) => {
      if (!err) {
        this.setData(commands)
        cb()
      } else {
        throw Error(err)
      }
    })
  }

  setData(fileData) {
    this.file = fileData.toString().trim()
  }

  getData() {
    return this.file
  }
}