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

	move(table) {
		if (!this.hasBeenPlaced) return
		if (table === undefined) return

		let { x, y, direction } = this.currentPosition

		x = parseInt(x)
		y = parseInt(y)

		switch (this.currentPosition.direction) {
			case 'NORTH':
				this.currentPosition.y =
					y === table.height - 1 ? this.currentPosition.y : (y + 1).toString()
				break
			case 'SOUTH':
				this.currentPosition.y = y === 0 ? this.currentPosition.y : (y - 1).toString()
				break
			case 'EAST':
				this.currentPosition.x = x === table.width - 1 ? this.currentPosition.x : (x + 1).toString()
				break
			case 'WEST':
				this.currentPosition.x = x === 0 ? this.currentPosition.x : (x - 1).toString()
				break
		}
	}

	report() {
		const { x, y, direction } = this.currentPosition

		if (this.hasBeenPlaced()) {
			process.stdout.write(`Current position: ${[ x, y, direction ].join(', ')}\n`)
		}
	}

	turn(rotation) {
		if (!this.hasBeenPlaced) return

		if (rotation === 'LEFT') {
			switch (this.currentPosition.direction) {
				case 'NORTH':
					this.currentPosition.direction = 'WEST'
					break
				case 'EAST':
					this.currentPosition.direction = 'NORTH'
					break
				case 'SOUTH':
					this.currentPosition.direction = 'EAST'
					break
				case 'WEST':
					this.currentPosition.direction = 'SOUTH'
					break
			}
		} else {
			switch (this.currentPosition.direction) {
				case 'NORTH':
					this.currentPosition.direction = 'EAST'
					break
				case 'EAST':
					this.currentPosition.direction = 'SOUTH'
					break
				case 'SOUTH':
					this.currentPosition.direction = 'WEST'
					break
				case 'WEST':
					this.currentPosition.direction = 'NORTH'
					break
			}
		}
	}
}
