const chai = require('chai')
const sinon = require('sinon')
const Table = require('../Models/Table')
const expect = chai.expect

describe('Table', () => {
	const table = new Table()

	it('On initialization this.width should be set to null', () => {
		expect(table.width).to.be.null
	})

	it('On initialization this.height should be set to null', () => {
		expect(table.height).to.be.null
	})

	describe('createTable', () => {
		it('should set this.width and this.height', () => {
			table.createTable(5, 5)

			expect(table.width).to.equal(5)
			expect(table.height).to.equal(5)
		})

		it('called without params should throw throwIntError Error', () => {
			expect(() => table.createTable()).to.throw(
				Error,
				'The parameter passed to validParam method must be a Integer',
			)
		})

		it('called with a string should throw throwIntError Error', () => {
			expect(() => table.createTable(5, '')).to.throw(
				Error,
				'The parameter passed to validParam method must be a Integer',
			)

			expect(() => table.createTable('', 5)).to.throw(
				Error,
				'The parameter passed to validParam method must be a Integer',
			)
		})
	})

	it('getTableDiameters method should return width and height of table in a Object', () => {
		table.createTable(5, 5)
		expect(table.getTableDiameters()).to.deep.equal({ width: 5, height: 5 })
	})
})
