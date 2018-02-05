const chai = require('chai')
const path = require('path')
const filePath = path.join(__dirname, './Files/example.txt')
const FileReader = require('../Models/FileReader')
const expect = chai.expect

describe('FileReader', () => {
	it('On initialization this.file should be set to null', () => {
		const fileReader = new FileReader()

		expect(fileReader.file).to.be.null
	})

	describe('loadFile method', () => {
		it('should return loaded file in a callback', (done) => {
			const fileReader = new FileReader()

			fileReader.loadFile(filePath, () => {
				expect(fileReader.file).to.equal('PLACE 0,0,NORTH')
				done()
			})
		})

		it('should throw error if file can not be loaded', () => {
			const fileReader = new FileReader()

			try {
				fileReader.loadFile('')
			} catch (err) {
				expect(err).to.be.a(Error)
			}
		})
	})

	it('setData method should set this.file', () => {
		const fileReader = new FileReader()

		fileReader.setData('PLACE 0,0,NORTH')

		expect(fileReader.file).to.equal('PLACE 0,0,NORTH')
	})

	it('getData method should return this.file', () => {
		const fileReader = new FileReader()

		fileReader.setData('PLACE 0,0,NORTH')

		expect(fileReader.getData()).to.equal('PLACE 0,0,NORTH')
	})
})
