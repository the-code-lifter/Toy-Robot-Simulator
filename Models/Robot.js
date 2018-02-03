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

	place(placementDirections, table) {
		this.currentPosition = placementDirections
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
		if (this.hasBeenPlaced())
			process.stdout.write(`Current position: ${[ x, y, direction ].join(', ')}\n`)
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
