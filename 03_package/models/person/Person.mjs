import assert from 'assert'
import { Name } from './Name.mjs'
import { Birthday } from './Birthday.mjs'
import { PersonId } from './PersonId.mjs'

export class Person {
  #id
  #name
  #birthday

  constructor (id, name, birthday) {
    assert(id instanceof PersonId)
    assert(name instanceof Name)
    assert(birthday instanceof Birthday)

    this.#id = id
    this.#name = name
    this.#birthday = birthday
  }

  static create ({ name, birthday }) {
    return new Person(
      new PersonId(),
      new Name(name),
      new Birthday(birthday),
    )
  }

  equals (person) {
    return this.#id.equals(person.#id)
  }

  greet () {
    console.log(`Hello, my name is ${this.#name.value}`)
  }

  introduceMySelf () {
    console.log(`I am ${this.#birthday.age} years old`)
  }
}