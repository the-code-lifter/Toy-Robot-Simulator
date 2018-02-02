const splitCommandsIntoArray = commands => {
  if (!(typeof commands === 'string')) throw Error('The parameter passed to splitCommandsIntoArray function must be a String')

  return commands.split('\n')
}

module.exports = {
  splitCommandsIntoArray
}