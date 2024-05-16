const firstPerson = {
  name: 'John',
  age: 20,
  ageUp: function () {
    firstPerson.age++
  },
}

console.log(firstPerson.name) // John
console.log(firstPerson.age) // 20
firstPerson.ageUp()
console.log(firstPerson.age) // 21

const secondPerson = {
  name: 'Mike',
  age: 20,
  ageUp: function () {
    secondPerson.age++
  },
}

console.log(secondPerson.name) // Mike
console.log(secondPerson.age) // 20
secondPerson.ageUp()
console.log(secondPerson.age) // 21