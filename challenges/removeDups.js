function removeDups(array) {
  if (!Array.isArray(array)) {
    throw "expected input to be array"
  }

  return array.reduce((total, current) => {
    return total.includes(current) ? total : [...total, current]
  }, [])
}

module.exports = { removeDups }