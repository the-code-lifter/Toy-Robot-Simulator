const chai = require('chai')
const { splitCommandsIntoArray, runCommand } = require('../Helpers/Commands')
const expect = chai.expect
const commands = 'PLACE 0,0,NORTH'

describe('splitCommandsIntoArray', () => {
	it('if anything else other then a string is passed it will through an error', () => {
		expect(() => splitCommandsIntoArray(3)).to.throw(
			Error,
			'The parameter passed to splitCommandsIntoArray function must be a String',
		)
	})

	it('should split loaded commands into an array of commands', () => {
		expect(splitCommandsIntoArray(commands)).to.deep.equal([ 'PLACE 0,0,NORTH' ])
	})
})

describe('runCommand', () => {
	it('if anything else other then a string is passed it will through an error', () => {
		expect(() => runCommand(3)).to.throw(
			Error,
			'The parameter passed to runCommand function must be a String',
		)
	})
})
