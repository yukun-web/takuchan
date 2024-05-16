function createPerson (name, age) {
  return {
    name: name,
    age: age,
    ageUp: function () {
      this.age++
    },
  }
}

const firstPerson = createPerson('John', 20)

console.log(firstPerson.name) // John
console.log(firstPerson.age) // 20
firstPerson.ageUp()
console.log(firstPerson.age) // 21

const secondPerson = createPerson('Mike', 20)

console.log(secondPerson.name) // John
console.log(secondPerson.age) // 20
secondPerson.ageUp()
console.log(secondPerson.age) // 21