const assert = require("assert")
const { pangramCheck } = require("../challenges/pangramCheck")

describe("pangramTest", () => {
  it("returns true if a given string contains every letter of the alphabet", () => {
    const validPangram = "The quick brown fox jumps over the lazy dog!!"

    const response = pangramCheck(validPangram)

    assert.ok(response)
  })

  it("returns false if a given string does not contain every letter of the alphabet", () => {
    const invalidPangram = "This is an invalid pangram!"

    const response = pangramCheck(invalidPangram)

    assert.ok(!response)
  })

  it("throws an error is the input is not a string", () => {
    const invalidInput = 69

    const response = () => { pangramCheck(invalidInput) }

    assert.throws(response, /only use string/)
  })
})


