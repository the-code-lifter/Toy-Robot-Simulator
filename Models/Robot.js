module.exports = class Robot {
	constructor() {
		this.currentPosition = {
			x: null,
			y: null,
			direction: null,
		}
	}

	place(placementDirections, table) {
		table.removePosition(this.currentPosition)
		this.currentPosition = placementDirections
		table.setPosition(placementDirections)
	}
}
