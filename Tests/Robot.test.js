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

	const currentPositionDefault = {
		x: '',
		y: '',
		direction: '',
	}

	describe('On initialization currentPosition', () => {
		const robot = new Robot()

		it('should have x property set to a empty string', () => {
			expect(robot.currentPosition.x).to.equal('')
		})

		it('should have y property set to a empty string', () => {
			expect(robot.currentPosition.y).to.equal('')
		})

		it('should have direction property set to a empty string', () => {
			expect(robot.currentPosition.direction).to.equal('')
		})
	})

	it('place method assigns directions to this.currentPosition', () => {
		const robot = new Robot()

		robot.place(place)

		expect(robot.currentPosition).to.deep.equal(place)
	})

	it('resetPlace method sets this.currentPosition back to its default value', () => {
		const robot = new Robot()

		robot.place(place)
		robot.resetPlace()

		expect(robot.currentPosition).to.deep.equal(currentPositionDefault)
	})

	describe('hasBeenPlaced method', () => {
		it('place method has not been called it should return false', () => {
			const robot = new Robot()

			expect(robot.hasBeenPlaced()).to.be.false
		})

		it('place method has been called it should return true', () => {
			const robot = new Robot()

			robot.place(place)

			expect(robot.hasBeenPlaced()).to.be.true
		})
	})

	describe('move method', () => {
		it('place method has not been called it should not move', () => {
			const robot = new Robot()

			robot.move()

			expect(robot.currentPosition).to.deep.equal(currentPositionDefault)
		})

		it('should not move robot if table parameter is undefined', () => {
			const robot = new Robot()

			robot.place(place)
			robot.move()

			expect(robot.currentPosition).to.deep.equal(place)
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
			let tablePlace = {
				x: '1',
				y: '1',
				direction: 'NORTH',
			}

			table.createTable(1, 1)

			robot.place(tablePlace)
			robot.move(table)

			expect(robot.currentPosition.y).to.equal('1')

			robot.place({ ...tablePlace, direction: 'EAST' })
			robot.move(table)

			expect(robot.currentPosition.x).to.equal('1')

			tablePlace = {
				x: '0',
				y: '0',
				direction: 'SOUTH',
			}

			robot.place(tablePlace)
			robot.move(table)

			expect(robot.currentPosition.y).to.equal('0')

			robot.place({ ...tablePlace, direction: 'WEST' })
			robot.move(table)

			expect(robot.currentPosition.x).to.equal('0')
		})
	})

	describe('report method', () => {
		let write

		beforeEach(() => {
			write = process.stdout.write
		})
		afterEach(() => {
			process.stdout.write = write
		})

		it('should output current position to the terminal', () => {
			const robot = new Robot()
			process.stdout.write = (message) => {}
			let spy = sinon.spy(process.stdout, 'write')

			robot.place({
				x: '1',
				y: '3',
				direction: 'NORTH',
			})

			robot.report()

			expect(spy.called).to.be.true
		})
	})

	describe('turn method', () => {
		let placeDirections = {
			x: '1',
			y: '1',
			direction: 'NORTH',
		}

		it('place method has not been called it should not turn', () => {
			const robot = new Robot()

			robot.turn('LEFT')

			expect(robot.currentPosition).to.deep.equal(currentPositionDefault)
		})

		it('when LEFT is passed as a parameter should rotate direction', () => {
			const robot = new Robot()
			let placeDirections = {
				x: '0',
				y: '0',
				direction: 'NORTH',
			}

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
			const robot = new Robot()
			let placeDirections = {
				x: '0',
				y: '0',
				direction: 'NORTH',
			}

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
