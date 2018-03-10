const fs = require('fs')

module.exports = class FileReader {
	constructor() {
		this.file = null
	}

	loadFile(filePath, cb) {
		fs.readFile(filePath, { encoding: 'utf-8' }, (err, commands) => {
			if (!err) {
				this.setData(commands)
				cb()
			} else {
				throw new Error(err)
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
