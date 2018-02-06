const chai = require('chai')
const { splitCommandsIntoArray, runCommand } = require('../Helpers/Commands')
const expect = chai.expect
const sinon = require('sinon')
const commands = 'PLACE 0,0,NORTH'

describe('splitCommandsIntoArray', () => {
  it('if anything else other then a string is passed it will throw an error', () => {
    expect(() => splitCommandsIntoArray(3)).to.throw(
      Error,
      'The parameter passed to splitCommandsIntoArray function must be a String'
    )
  })

  it('should split a string of commands into an array of commands', () => {
    expect(splitCommandsIntoArray(commands)).to.deep.equal(['PLACE 0,0,NORTH'])
  })
})

describe('runCommand', () => {
  const table = { getTableDiameters: () => ({ width: 5, height: 5 }) }

  it('if anything else other then a string is passed it will throw an error', () => {
    expect(() => runCommand(3)).to.throw(
      Error,
      'The parameter passed to runCommand function must be a String'
    )
  })

  it('if command is a type of PLACE and is valid it should call robot.place method', () => {
    const robot = { place: params => {} }
    const spy = sinon.spy(robot, 'place')

    runCommand('PLACE 1,1,NORTH', table, robot)

    expect(spy.called).to.be.true
  })

  it('if command is a type of PLACE and is not valid it should call robot.resetPlace method', () => {
    const robot = { resetPlace: params => {} }
    const spy = sinon.spy(robot, 'resetPlace')

    runCommand('PLACE -1,1,PINK', table, robot)

    expect(spy.called).to.be.false
  })

  it('if command is a type of LEFT or RIGHT command and is valid it should call robot.place method', () => {
    const robot = { turn: params => {} }
    const spy = sinon.spy(robot, 'turn')

    runCommand('LEFT', table, robot)

    expect(spy.called).to.be.true

    runCommand('RIGHT', table, robot)

    expect(spy.called).to.be.true
  })

  it('if command is a type of MOVE command and is valid it should call robot.move method', () => {
    const robot = { move: params => {} }
    const spy = sinon.spy(robot, 'move')

    runCommand('MOVE', table, robot)

    expect(spy.called).to.be.true
  })

  it('if command is a type of REPORT command and is valid it should call robot.move method', () => {
    const robot = { report: () => {} }
    const spy = sinon.spy(robot, 'report')

    runCommand('REPORT', table, robot)

    expect(spy.called).to.be.true
  })
})
