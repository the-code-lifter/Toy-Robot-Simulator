const validParam = param => {
  if (!Number.isInteger(param)) return false
  return true
}

const throwIntError = () => {
  throw Error('The parameter passed to validParam method must be a Integer')
}

module.exports = class Table {
  constructor() {
    this.width = null
    this.height = null
  }

  createTable(width, height) {
    if (width === undefined || !validParam(width)) throwIntError()
    if (height === undefined || !validParam(height)) throwIntError()

    this.width = width
    this.height = height
  }

  getTableDiameters() {
    const { width, height } = this

    return { width, height }
  }
}
