const assert = require("assert")
const { transposeMatrix } = require("../challenges/transposeMatrix")

describe("transposeMatrix", () => {
  it("transposes a matrix array", () => {
    const inputArray = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]
    ]
    const expectedResponse = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]

    const response = transposeMatrix(inputArray)

    assert.deepEqual(expectedResponse, response)
  })

  it("throws an error if the input value is not an array", () => {
    const invalidInput = 69420

    const response = () => { transposeMatrix(invalidInput) }

    assert.throws(response, /expected input to be array/)
  })

  it("throws an error if the any value of the input array is not an array", () => {
    const invalidInputArr = [
      [1, 2, 3],
      [1, 2, 3],
      3
    ]

    const response = () => { transposeMatrix(invalidInputArr) }

    assert.throws(response, /expected array values to be arrays/)
  })
})