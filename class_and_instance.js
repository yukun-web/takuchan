class Person {
  #name
  #birthday

  constructor (name, birthday) {
    this.#name = name
    this.#birthday = birthday
  }

  get #age () {
    const diff = new Date() - this.#birthday
    const age = new Date(diff)
    return Math.abs(age.getUTCFullYear() - 1970)
  }

  rename (newName) {
    this.#name = newName
  }

  greet () {
    console.log(`Hello, my name is ${this.#name}`)
  }

  introduceMySelf () {
    console.log(`I am ${this.#age} years old`)
  }
}

const firstPerson = new Person('John', new Date('1994-03-28'))

firstPerson.greet() // Hello, my name is John
firstPerson.rename('Jane')
firstPerson.greet() // Hello, my name is Jane
firstPerson.introduceMySelf() // I am xx years old