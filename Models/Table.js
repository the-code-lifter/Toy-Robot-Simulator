module.exports = class Table {
	constructor() {
		this.table = {}
		this.tableSize = {
			width: null,
			height: null,
		}
	}

	convertArrayToString(array) {
		if (!(array instanceof Array))
			throw Error('The parameter passed to convertArrayToString method must be a Array')
		return array.toString()
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

		Array.from(Array(width).keys()).forEach((column) => {
			Array.from(Array(height).keys()).forEach((row) => {
				let convertedArrayString = this.convertArrayToString([ column, row ])

				this.table[convertedArrayString] = ''
			})
		})
	}

	getTable() {
		return this.table
	}

	getTableSize() {
		return this.tableSize
	}

	removePosition(position) {
		this.setPosition({ ...position, direction: '' })
	}

	setPosition(position) {
		const { x, y, direction } = position
		const convertedArrayString = this.convertArrayToString([ x, y ])
		this.table[convertedArrayString] = direction
	}
}
