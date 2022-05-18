// determines whether or not a string contians every letter of the alphabet
function pangramCheck(text) {
  if (typeof text !== "string") {
    throw Error("only use string")
  }

  const letters = "abcdefghijklmnopqrstuvwxyz".split("")
  const cleanedText = text.toLowerCase().split("")

  cleanedText.map(letter => {
      const letterIndex = letters.findIndex(character => character === letter)
      letterIndex !== -1 ? letters.splice(letterIndex, 1) : null
  })
  
  return letters.length === 0 ? true : false
}

module.exports = { pangramCheck }