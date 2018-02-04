const chai = require('chai')
const sinon = require('sinon')
const FileReader = require('../Models/FileReader')
const expect = chai.expect

describe('FileReader', () => {
	const fileReader = new FileReader()

	it('On initialization this.file should be set to null', () => {
		expect(fileReader.file).to.be.null
	})

	it('loadFile method should return Callback once file has been loaded', () => {
		const cb = sinon.spy()
		fileReader.loadFile(cb)
		expect(cb.calledOnce).to.be.true
	})

	it('setData method should set this.file', () => {
		fileReader.setData('PLACE 0,0,NORTH')
		expect(fileReader.file).to.equal('PLACE 0,0,NORTH')
	})

	it('getData method should return ', () => {
		expect(fileReader.getData()).to.equal('PLACE 0,0,NORTH')
	})
})
