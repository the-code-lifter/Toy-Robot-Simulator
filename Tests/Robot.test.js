const chai = require('chai')
const sinon = require('sinon')
const Robot = require('../Models/Robot')
const Table = require('../Models/Table')
const expect = chai.expect

describe('Robot', () => {
	const place = {
		x: '1',
		y: '3',
		direction: 'NORTH',
	}

	describe('On initialization currentPosition', () => {
		const robot = new Robot()

		it('should be an Object with property x set to an empty string', () => {
			expect(robot.currentPosition.x).to.equal('')
		})

		it('should be an Object with property y set to an empty string', () => {
			expect(robot.currentPosition.y).to.equal('')
		})

		it('should be an Object with property direction set to an empty string', () => {
			expect(robot.currentPosition.direction).to.equal('')
		})
	})

	it('place method assigns placement directions to this.currentPosition', () => {
		const robot = new Robot()

		robot.place(place)

		expect(robot.currentPosition).to.deep.equal(place)
	})

	describe('hasBeenPlaced method', () => {
		it('if place method has not been called it should return false', () => {
			const robot = new Robot()

			expect(robot.hasBeenPlaced()).to.be.false
		})

		it('if place method has been called it should return true', () => {
			const robot = new Robot()

			robot.place(place)

			expect(robot.hasBeenPlaced()).to.be.true
		})
	})

	describe('move method', () => {
		it('if place method has not been called it should not move', () => {
			const robot = new Robot()
			robot.move()
			expect(robot.currentPosition).to.deep.equal(robot.currentPosition)
		})

		it('should not move robot if table parameter is undefined', () => {
			const robot = new Robot()
			robot.place(place)
			robot.move()
			expect(robot.currentPosition).to.deep.equal(robot.currentPosition)
		})

		it('should move robot one unit forward', () => {
			const robot = new Robot()
			const table = new Table()
			table.createTable(5, 5)

			robot.place(place)
			robot.move(table)

			expect(robot.currentPosition.y).to.equal('4')

			robot.place({ ...place, direction: 'SOUTH' })
			robot.move(table)

			expect(robot.currentPosition.y).to.equal('3')

			robot.place({ ...place, direction: 'EAST' })
			robot.move(table)

			expect(robot.currentPosition.x).to.equal('2')

			robot.place({ ...place, direction: 'WEST' })
			robot.move(table)

			expect(robot.currentPosition.x).to.equal('0')
		})

		it('should not move robot if you are going to fall off the table', () => {
			const robot = new Robot()
			const table = new Table()
			let placeOffTable = {
				x: '1',
				y: '1',
				direction: 'NORTH',
			}

			table.createTable(1, 1)

			robot.place(placeOffTable)
			robot.move(table)

			expect(robot.currentPosition.y).to.equal('1')

			robot.place({ ...placeOffTable, direction: 'EAST' })
			robot.move(table)

			expect(robot.currentPosition.x).to.equal('1')

			placeOffTable = {
				x: '0',
				y: '0',
				direction: 'SOUTH',
			}

			robot.place(placeOffTable)
			robot.move(table)

			expect(robot.currentPosition.y).to.equal('0')

			robot.place({ ...placeOffTable, direction: 'WEST' })
			robot.move(table)

			expect(robot.currentPosition.x).to.equal('0')
		})
	})

	describe('report method', () => {
		let output
		const write = process.stdout.write

		beforeEach(() => {
			output = ''
			process.stdout.write = (message) => {
				output += message
			}
		})

		afterEach(() => {
			process.stdout.write = write
		})

		it('report method should output current position to the terminal', () => {
			const robot = new Robot()
			robot.place({
				x: '1',
				y: '3',
				direction: 'NORTH',
			})

			expect(output).to.equal('Current position: 1, 3, NORTH')
		})
	})

	describe('turn method', () => {
		let placeDirections = {
			x: '1',
			y: '1',
			direction: 'NORTH',
		}

		it('if place method has not been called it should not move', () => {
			const robot = new Robot()
			robot.turn('LEFT')
			expect(robot.currentPosition).to.deep.equal({
				x: '',
				y: '',
				direction: '',
			})
		})

		it('when LEFT is passed as a parameter should rotate direction', () => {
			let placeDirections = {
				x: '0',
				y: '0',
				direction: 'NORTH',
			}
			const robot = new Robot()

			robot.place(placeDirections)

			robot.turn('LEFT')

			expect(robot.currentPosition.direction).to.equal('WEST')

			robot.turn('LEFT')

			expect(robot.currentPosition.direction).to.equal('SOUTH')

			robot.turn('LEFT')

			expect(robot.currentPosition.direction).to.equal('EAST')

			robot.turn('LEFT')

			expect(robot.currentPosition.direction).to.equal('NORTH')
		})

		it('when RIGHT is passed as a parameter should rotate direction', () => {
			let placeDirections = {
				x: '0',
				y: '0',
				direction: 'NORTH',
			}
			const robot = new Robot()

			robot.place(placeDirections)

			robot.turn('RIGHT')

			expect(robot.currentPosition.direction).to.equal('EAST')

			robot.turn('RIGHT')

			expect(robot.currentPosition.direction).to.equal('SOUTH')

			robot.turn('RIGHT')

			expect(robot.currentPosition.direction).to.equal('WEST')

			robot.turn('RIGHT')

			expect(robot.currentPosition.direction).to.equal('NORTH')
		})
	})
})
