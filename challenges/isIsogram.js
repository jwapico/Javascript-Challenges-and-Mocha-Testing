function isIsogram(text) {
  if (typeof text !== "string") {
    throw "expected input to be string"
  }

  const letters = "abcdefghijklmnopqrstuvwxyz"
  const cleanedText = text.toLowerCase().split("").filter(letter => letters.includes(letter))

  const lettersArr = letters.split("")
  for (const letter of cleanedText) {
    const index = lettersArr.indexOf(letter)
    lettersArr.splice(index, 1)
    if (index === -1) {
      return false
    }
  }
  return true
}

module.exports = { isIsogram }