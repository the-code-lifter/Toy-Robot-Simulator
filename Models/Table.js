module.exports = class Table {
  constructor() {
    this.table = {}
    this.tableHeight = 5
    this.tableWidth = 5
  }

  convertArrayToString(array) {
    if (array instanceof Array) return array.toString()

    return false
  }

  createTable() {
    Array(this.tableWidth).fill(0).forEach((_, column) => {
      Array(this.tableHeight).fill(0).forEach((_, row) => {
        let convertedArrayString = this.convertArrayToString([column, row])

        this.table[convertedArrayString] = ''
      })
    })
  }

  getTable() {
    return this.table
  }
}