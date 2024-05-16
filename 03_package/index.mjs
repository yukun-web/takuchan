import {
  Person,
  Name,
  Birthday,
} from './models/person/index.mjs'
import { faker } from '@faker-js/faker'

const john = Person.create({
  name: new Name('John'),
  birthday: new Birthday('1994-03-28'),
})
const jane = Person.create({
  name: new Name('Jane'),
  birthday: new Birthday('2001-06-15'),
})

const members = [john, jane]

members.forEach(member => {
  member.greet()
  member.introduceMySelf()

  console.log('Are you John?', member.is(john) ? 'Yes.' : 'No.')
})

const fakeMembers = Array.from({ length: 100 }, () => Person.create({
  name: new Name(faker.person.firstName()),
  birthday: new Birthday(faker.date.past({ years: 100 })),
}))

fakeMembers.forEach(member => {
  member.greet()
  member.introduceMySelf()
})