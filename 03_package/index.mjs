import { Person } from './models/person/Person.mjs'

const firstPerson = Person.create({
  name: 'John',
  birthday: '1994-03-28',
})

firstPerson.greet()
firstPerson.introduceMySelf()
console.log(firstPerson.equals(firstPerson))