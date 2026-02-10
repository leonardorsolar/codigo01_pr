// Intentionally buggy code for Pull Request fixes

function sum(a, b) {
  // BUG: concatenação de string em vez de soma numérica
  return a + b
}

const values = [1, 2, 3, 4]

console.log("------------------------------------------------")

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  getEmailDomain() {
    // BUG: índice negativo não funciona em JavaScript
    // Resultado esperado: "example.com"
    return this.email.split("@")[-1]
  }

  rename(newName) {
    // BUG: trim é uma função, mas não está sendo executada
    // this.name vira uma referência de função
    this.name = newName.trim
  }

  getUpperCaseName() {
    // BUG: pode quebrar se this.name não for string
    return this.name.toUpperCase()
  }
}

const user = new User("Ana", "ana@example.com")

console.log("domain:", user.getEmailDomain())

user.rename(" Maria ")
console.log("name:", user.name)

// Vai gerar erro em runtime
console.log("upper name:", user.getUpperCaseName())

// BUG explícito para testes
console.log("sum result:", sum("1", 2))
