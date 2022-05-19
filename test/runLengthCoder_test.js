const assert = require("assert")
const { runLengthEncoder, runLengthDecoder } = require("../challenges/runLengthCoder")

describe("runLengthEncoder", () => {
  it("returns a compressed string in which consecutive characters are shortened to a count and value representation", () => {
    const uncompressedString = "wwwiiuuuuiii"
    const expectedResult = "3w2i4u3i"

    const result = runLengthEncoder(uncompressedString)

    assert.strictEqual(expectedResult, result)
  })

  it("throws an error if the input was not a string", () => {
    const invalidInput = 69420

    const result = () => { runLengthEncoder(invalidInput) }

    assert.throws(result, /input expected to be string/)
  })
})

describe("runLengthDecoder", () => {
  it("returns a decompressed version of the input string", () => {
    const compressedString = "3w2i4u3i"
    const expectedResult = "wwwiiuuuuiii"

    const result = runLengthDecoder(compressedString)

    assert.strictEqual(expectedResult, result)
  })

  it("throws an error if the input was not a string", () => {
    const invalidInput = 69420

    const result = () => { runLengthDecoder(invalidInput) }

    assert.throws(result, /input expected to be string/)
  })
})