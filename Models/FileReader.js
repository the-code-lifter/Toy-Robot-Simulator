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
        this.file = commands.toString().trim()
        cb()
      } else {
        throw Error(err)
      }
    })
  }

  getData() {
    return this.file
  }
}