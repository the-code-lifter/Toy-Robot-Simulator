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

	move() {
		if (!this.hasBeenPlaced) return

		let { x, y, direction } = this.currentPosition
		x = parseInt(x)
		y = parseInt(y)

		switch (this.currentPosition.direction) {
			case 'NORTH':
				this.currentPosition.y = y === 4 ? y : (y + 1).toString()
				break
			case 'SOUTH':
				this.currentPosition.y = y === 0 ? y : (y - 1).toString()
				break
			case 'EAST':
				this.currentPosition.x = x === 4 ? x : (x + 1).toString()
				break
			case 'WEST':
				this.currentPosition.x = x === 0 ? x : (x - 1).toString()
				break
		}
	}

	report() {
		const { x, y, direction } = this.currentPosition

		return !this.hasBeenPlaced()
			? process.stdout.write('Robot has not been placed\n')
			: process.stdout.write(`Output: ${[ x, y, direction ].join(', ')}\n`)
	}

	hasBeenPlaced() {
		const { x, y, direction } = this.currentPosition
		return !(x === 0 && y === 0 && direction === '')
	}
}
