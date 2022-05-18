function rainTranslator(number) {
  if (typeof number !== "number") {
    throw ("expected a number")
  }

  let rainPhrase = ""
  
  number % 3 === 0 ? rainPhrase += "Pling" : null
  number % 5 === 0 ? rainPhrase += "Plang" : null
  number % 7 === 0 ? rainPhrase += "Plong" : null

  return rainPhrase || number
}

module.exports = { rainTranslator }