const assert = require("assert")
const { pangramCheck } = require("../challenges/pangramCheck")

describe("pangramTest", () => {
  it("determines whether or not a string contians every letter of the alphabet", () => {
    const validPangram = "The quick brown fox jumps over the lazy dog!!"

    const response = pangramCheck(validPangram)

    assert.ok(response)
  })

  it("throws an error is the input is not a string", () => {
    const invalidInput = 69

    const response = () => { pangramCheck(invalidInput) }

    assert.throws(response, /only use string/)
  })
})


