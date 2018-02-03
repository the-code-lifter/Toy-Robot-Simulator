module.exports = class Robot {
	constructor() {
		this.currentPosition = {
			x: 0,
			y: 0,
			direction: '',
		}
	}

	place(placementDirections, table) {
		table.removePosition(this.currentPosition)
		this.currentPosition = placementDirections
		table.setPosition(placementDirections)
	}

	report() {
		const { x, y, direction } = this.currentPosition

		return x === 0 && y === 0 && direction === ''
			? process.stdout.write('Robot has not been placed\n')
			: process.stdout.write(`Output: ${[ x, y, direction ].join(', ')}\n`)
	}
}
