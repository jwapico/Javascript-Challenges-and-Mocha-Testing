const assert = require("assert")
const { makeFlat } = require("../challenges/makeFlat")

describe("makeFlat", () => {
  it("flattens an array of nested arrays to be one array with only values using the .reduce method", () => {
    const inputArray = ["one", ["two", "three"], ["four", ["five"]]]
    const expectedResponse = ["one", "two", "three", "four", "five"]

    const response = makeFlat(inputArray)

    assert.deepEqual(expectedResponse, response)
  })

  it("throws an error if the input is not an array", () => {
    const invalidInput = 69420
    
    const response = () => { makeFlat(invalidInput) }

    assert.throws(response, /expected input to be array/)
  })
})