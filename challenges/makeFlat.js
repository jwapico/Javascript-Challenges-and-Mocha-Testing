function makeFlat(array) {
  if (!Array.isArray(array)) {
    throw "expected input to be array"
  }

  return array.reduce((accumulator, value) => {
    return !Array.isArray(value) ? [...accumulator, value] : [...accumulator, ...makeFlat(value)]
  }, [])
}

module.exports = { makeFlat }