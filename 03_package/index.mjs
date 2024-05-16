import {
  Person,
  Id,
  Name,
  Birthday,
} from './models/person/index.mjs'

const firstPerson = new Person(
  new Id(),
  new Name('John'),
  new Birthday('1994-03-28'),
)

firstPerson.greet()
firstPerson.introduceMySelf()
console.log(firstPerson.equals(firstPerson))

const secondPerson = new Person(
  new Id(),
  new Name('Jane'),
  new Birthday('1994-04-02'),
)

console.log(firstPerson.equals(secondPerson))