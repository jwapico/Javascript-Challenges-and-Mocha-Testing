function transposeMatrix(array) {
  if (!Array.isArray(array)) {
    throw "expected input to be array"
  }

  const transposedMatrix = []

  let index = 0
  array.forEach(nestedArr => {
    if (!Array.isArray(nestedArr)) {
      throw "expected array values to be arrays"
    }
    const homoArray = nestedArr.map(val => nestedArr[index])
    index++
    transposedMatrix.push(homoArray)
  });

  return transposedMatrix
}

const inputArray = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]

module.exports = { transposeMatrix }