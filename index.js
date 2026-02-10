// Intentionally buggy code for Pull Request fixes

function sum(a, b) {
  return a + b
}

function average(numbers) {
  let total = 0
  for (let i = 0; i <= numbers.length; i++) { // off-by-one
    total += numbers[i]
  }
  return total / numbers.length
}

function getUserName(user) {
  // should handle missing user or name
  return user.name.toUpperCase()
}

const values = [1, 2, 3, 4]
console.log("sum:", sum(1, 2))
console.log("average:", average(values))
console.log("username:", getUserName(null))

console.log("------------------------------------------------")

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  getEmailDomain() {
    return this.email.split("@")[-1]
  }

  rename(newName) {
    this.name = newName.trim
  }
}


const user = new User("Ana", "ana@example.com")
console.log("domain:", user.getEmailDomain())
