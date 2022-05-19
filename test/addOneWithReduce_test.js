const assert = require("assert")
const { addOneWithReduce } = require("../challenges/addOneWithReduce")

describe("addOneWithReduce", () => {
  it("recreates the .map method with .reduce", () => {
    const inputArray = [1, 2, 3]
    const expectedResponse = [2, 3, 4]
    const callback = (value) => value + 1

    const response = addOneWithReduce(inputArray, callback)

    assert.deepEqual(expectedResponse, response)
  })

  it("throws an error when the input is not an array", () => {
    const invalidInput = 69420

    const response = () => { addOneWithReduce(invalidInput) }

    assert.throws(response, /expected input to be array/)
  })

  it("throws an error if a value of the input array is not a number", () => {
    const invalidInputArr = ['sixty', 'nine', 'four', 'twenty']

    const response = () => { addOneWithReduce(invalidInputArr) }

    assert.throws(response, /expected input values to be numbers/)
  })
})