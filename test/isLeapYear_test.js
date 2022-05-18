const assert = require("assert")
const { isLeapYear } = require("../challenges/isLeapYear")

describe("isLeapYear", () => {
  it("returns true if the given year is divisible by four and is not divisible by 100, unless it's divisible by 400", () => {
    const validLeapYear = 1600

    const response = isLeapYear(validLeapYear)

    assert.ok(response)
  })
  
  it("returns false if the year is not divisible by 4", () => {
    const invalidLeapYear = 2069

    const response = isLeapYear(invalidLeapYear)

    assert.ok(!response)
  })

  it("returns false if the year is divisible by 4 and 100, but not 400", () => {
    const invalidLeapYear = 1700

    const response = isLeapYear(invalidLeapYear)

    assert.ok(!response)
  })

  it("throws an error if the input year is not a number", () => {
    const invalidInput = "sixty-nine"

    const response = () => { isLeapYear(invalidInput) }

    assert.throws(response, /expected input to be number/)
  })
})