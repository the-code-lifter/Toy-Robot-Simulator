const directionsAllowed = [ 'NORTH', 'SOUTH', 'WEST', 'EAST' ]

const getPlacementDirections = (placementCommand) => {
	const [ x, y, direction ] = placementCommand.split(' ').slice(-1).join().split(',')

	return {
		x,
		y,
		direction,
	}
}

const isValidPlace = (place, table, robot) => {
	const { x, y, direction } = place
	const { width, height } = table.getTableDiameters()

	if (x > width - 1 || x < 0) return false
	if (y > height - 1 || y < 0) return false

	if (!directionsAllowed.includes(direction)) return false

	return true
}

const splitCommandsIntoArray = (commands) => {
	if (!(typeof commands === 'string'))
		throw Error('The parameter passed to splitCommandsIntoArray function must be a String')

	return commands.toUpperCase().split('\n')
}

const runCommand = (command, table, robot) => {
	if (!(typeof command === 'string'))
		throw Error('The parameter passed to runCommand function must be a String')

	if (command.indexOf('PLACE') > -1) {
		const placementDirections = getPlacementDirections(command)

		return isValidPlace(placementDirections, table)
			? robot.place(placementDirections)
			: robot.resetPlace()
	}

	if (command.indexOf('LEFT') > -1 || command.indexOf('RIGHT') > -1) return robot.turn(command)
	if (command.indexOf('MOVE') > -1) return robot.move(table)
	if (command.indexOf('REPORT') > -1) return robot.report()
}

module.exports = {
	splitCommandsIntoArray,
	runCommand,
}
