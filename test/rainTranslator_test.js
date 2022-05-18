const assert = require("assert")
const {rainTranslator } = require("../challenges/rainTranslator")

describe("rainTranslator", () => {
  it("outputs 'Pling' if the given number has 3 as a factor", () => {
    const input = 3
    const expectedResponse = "Pling"

    const response = rainTranslator(input)

    assert.strictEqual(expectedResponse, response)
  })

  it("outputs 'Plang' if the given number has 5 as a factor", () => {
    const input = 5
    const expectedResponse = "Plang"

    const response = rainTranslator(input)

    assert.strictEqual(expectedResponse, response)
  })

  it("outputs 'Plong' if the given number has 7 as a factor", () => {
    const input = 7
    const expectedResponse = "Plong"

    const response = rainTranslator(input)

    assert.strictEqual(expectedResponse, response)
  })

  it("will chain the sounds if the given number is a evenly divisible by 3, 5, or 7", () => {
    const input = 15
    const expectedResponse = "PlingPlang"

    const response = rainTranslator(input)

    assert.strictEqual(expectedResponse, response)
  })

  it("returns the input number if the input value is not divisible by 3, 5, or 7", () => {
    const input = 2
    const expectedResponse = 2

    const response = rainTranslator(input)

    assert.strictEqual(expectedResponse, response)
  })

  it("throws an error if the input is not a number", (() => {
    const input = "sixty-nine"

    const response = () => { rainTranslator(input) }

    assert.throws(response, /expected a number/)
  }))
})