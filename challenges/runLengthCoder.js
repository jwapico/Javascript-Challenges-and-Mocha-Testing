function runLengthEncoder(text)  {
  if (typeof text !== "string") {
    throw "input expected to be string"
  }
  
  return text.replace(/(\w)\1+/g, (match, value) => `${match.length}${value}`)
}
console.log(runLengthEncoder("wwwiiuuuuii"))

function runLengthDecoder(text) {
  if (typeof text !== "string") {
    throw "input expected to be string"
  }

  return text.replace(/(\d+)(\w)/g, (x,y,z) => z.repeat(y))
}


module.exports = { runLengthEncoder, runLengthDecoder }