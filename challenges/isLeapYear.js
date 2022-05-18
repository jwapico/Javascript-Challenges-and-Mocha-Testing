function isLeapYear(year) {
  if (typeof year !== "number") {
    throw "expected input to be number"
  }

  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? true : false
}

module.exports = { isLeapYear }