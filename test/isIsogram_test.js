const assert = require("assert")
const { isIsogram } = require("../challenges/isIsogram")

describe("isIsogram", () => {
  it("returns true if a given string contains any letter once or less", () => {
    const validIsogram = "Panchiko"

    const response = isIsogram(validIsogram)

    assert.ok(response)
  })

  it("returns false if a given string contains any letter more than once", () => {
    const invalidIsogram = "Earl Sweatshirt"

    const response = isIsogram(invalidIsogram)

    assert.ok(!response)
  })

  it("throws an error if the input is anything other than a string", () => {
    const invalidInput = 69

    const response = () => { isIsogram(invalidInput) }

    assert.throws(response, /expected input to be string/)
  })
})