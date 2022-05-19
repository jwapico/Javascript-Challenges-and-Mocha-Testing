const assert = require("assert")
const { removeDups } = require("../challenges/removeDups")

describe("removeDups", () => {
  it("removes duplicate items from a given array", () => {
    const inputArray = ["one", "one", "two", "three", "two"]
    const expectedResponse = ["one", "two", "three"]

    const response = removeDups(inputArray)

    assert.deepEqual(expectedResponse, response)
  })

  it("throws an error when the input is not an array", () => {
    const invalidInput = 69420

    const response = () => { removeDups(invalidInput) }

    assert.throws(response, /expected input to be array/)
  })
})