function getUsers(userData) {
  const filteredUsers = []
  userData.forEach(user => user.name.toLowerCase().includes("k") && filteredUsers.push({name: user.name, email: user.email}))
  return filteredUsers
}

module.exports = { getUsers }