const directionsAllowed = [ 'NORTH', 'SOUTH', 'WEST', 'EAST' ]

const getPlacementDirections = (placementCommand) => {
	const [ x, y, direction ] = placementCommand.split(' ').slice(-1).join().split(',')

	return {
		x,
		y,
		direction,
	}
}

const isValidPlace = (place, tableSize) => {
	const { x, y, direction } = place

	if (x > tableSize.width || x < 0) return false
	if (x > tableSize.height || x < 0) return false

	if (y > tableSize.width || y < 0) return false
	if (y > tableSize.height || y < 0) return false

	if (directionsAllowed.indexOf(direction) === -1) return false

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

		return isValidPlace(placementDirections, table.getTableSize)
			? robot.place(placementDirections, table)
			: false
	}

	if (command.indexOf('MOVE') > -1) return robot.move()

	if (command.indexOf('REPORT') > -1) return robot.report()

	if (command.indexOf('LEFT') > -1 || command.indexOf('RIGHT') > -1)
		return console.log('Turn command')

	console.log(`${command} is an unknown to the Robot`)
}

module.exports = {
	splitCommandsIntoArray,
	runCommand,
}
