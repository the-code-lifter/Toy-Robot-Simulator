module.exports = class Table {
	constructor() {
		this.tableSize = {
			width: null,
			height: null,
		}
	}

	validParam(param) {
		if (!Number.isInteger(param)) return false
		return true
	}

	throwIntError() {
		throw Error('The parameter passed to validParam method must be a Integer')
	}

	createTable(width, height) {
		if (width === undefined || !this.validParam(width)) this.throwIntError()
		if (height === undefined || !this.validParam(height)) this.throwIntError()

		this.tableSize = {
			width,
			height,
		}
	}

	getTable() {
		return this.table
	}

	getTableSize() {
		return this.tableSize
	}
}
