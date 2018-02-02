module.exports = class Table {

  constructor() {
    this.table = {}
  }

  convertArrayToString(array) {
    if (!(array instanceof Array)) return false
    return array.toString()
  }

  validParam(param) {
    if (!(Number.isInteger(param))) return false
    return true
  }

  throwIntError() {
    throw Error('The parameter passed to this method is not valid must be a Int')
  }

  createTable(width, height) {
    if (width === undefined || !this.validParam(width)) this.throwIntError()
    if (height === undefined || !this.validParam(height)) this.throwIntError()

    Array.from(Array(width).keys()).forEach(column => {
      Array.from(Array(height).keys()).forEach(row => {
        let convertedArrayString = this.convertArrayToString([column, row])

        this.table[convertedArrayString] = ''
      })
    })
  }

  getTable() {
    return this.table
  }
}