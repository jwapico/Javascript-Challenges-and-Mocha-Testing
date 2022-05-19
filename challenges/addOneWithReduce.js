function addOneWithReduce(array, callback) {
  if (!Array.isArray(array)) {
    throw "expected input to be array"
  }

  return array.reduce((accumulator, current) => {
    if (typeof current !== "number") {
      throw "expected input values to be numbers"
    }
    return [...accumulator, callback(current)]
  }, [])
}

module.exports = { addOneWithReduce }