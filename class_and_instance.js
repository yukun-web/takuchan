class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  ageUp () {
    this.age++
  }

  rename (newName) {
    this.name = newName
  }

  greet () {
    console.log(`Hello, my name is ${this.name}`)
  }

  sayAge () {
    console.log(`I am ${this.age} years old`)
  }
}

const firstPerson = new Person('John', 20)

firstPerson.greet() // Hello, my name is John
firstPerson.sayAge() // I am 20 years old