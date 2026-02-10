// Intentionally buggy code for Pull Request fixes

function sum(a, b) {
  // BUG: concatenação de string em vez de soma numérica
  return a + b
}

// BUG explícito para testes
console.log("sum result:", sum("1", 2))

console.log("------------------------------------------------")

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  rename(newName) {
    // BUG sutil: não valida tipo nem remove espaços
    // Pode salvar nome inconsistente
    this.name = newName
  }

  getUpperCaseName() {
    // BUG sutil: assume que name sempre é string válida
    return this.name.toUpperCase()
  }
}

const user = new User("Ana", "ana@example.com")

user.rename(" Maria ")
console.log("name:", `"${user.name}"`)

// Funciona, mas retorna valor errado
console.log("upper name:", user.getUpperCaseName())


