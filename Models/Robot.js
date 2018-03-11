module.exports = class Robot {
	constructor() {
		this.currentPosition = {
			x: '',
			y: '',
			direction: '',
		}
	}

	hasBeenPlaced() {
		const { x, y, direction } = this.currentPosition

		return !(x === '' && y === '' && direction === '')
	}

	place(placementDirections) {
		this.currentPosition = placementDirections
	}

	resetPlace() {
		this.currentPosition = {
			x: '',
			y: '',
			direction: '',
		}
	}

	move(table) {
		if (!this.hasBeenPlaced) return
		if (table === undefined) return

		let { x, y, direction } = this.currentPosition

		x = parseInt(x)
		y = parseInt(y)

		switch (this.currentPosition.direction) {
			case 'NORTH':
				this.currentPosition.y = y >= table.height - 1 ? this.currentPosition.y : (y + 1).toString()
				break
			case 'SOUTH':
				this.currentPosition.y = y <= 0 ? this.currentPosition.y : (y - 1).toString()
				break
			case 'EAST':
				this.currentPosition.x = x >= table.width - 1 ? this.currentPosition.x : (x + 1).toString()
				break
			case 'WEST':
				this.currentPosition.x = x <= 0 ? this.currentPosition.x : (x - 1).toString()
				break
		}
	}

	report() {
		const { x, y, direction } = this.currentPosition

		if (this.hasBeenPlaced())
			process.stdout.write(`Current position: ${[ x, y, direction ].join(', ')}\n`)
	}

	turn(rotation) {
		if (!this.hasBeenPlaced()) return

		const left = {
				north: 'WEST',
				east: 'NORTH',
				south: 'EAST',
				west: 'SOUTH',
			},
			right = {
				north: 'EAST',
				east: 'SOUTH',
				south: 'WEST',
				west: 'NORTH',
			}

		this.currentPosition.direction =
			rotation === 'LEFT'
				? left[this.currentPosition.direction.toLowerCase()]
				: right[this.currentPosition.direction.toLowerCase()]
	}
}
