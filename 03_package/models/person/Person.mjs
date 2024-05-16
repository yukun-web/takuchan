import assert from 'assert'
import { Name } from './Name.mjs'
import { Birthday } from './Birthday.mjs'
import { Id } from './Id.mjs'

export class Person {
  #id
  #name
  #birthday

  constructor (id, name, birthday) {
    assert(id instanceof Id)
    assert(name instanceof Name)
    assert(birthday instanceof Birthday)

    this.#id = id
    this.#name = name
    this.#birthday = birthday
  }

  static create ({ name, birthday }) {
    return new Person(new Id(), name, birthday)
  }

  is (person) {
    return person instanceof Person && this.#id.equals(person.#id)
  }

  greet () {
    console.log(`Hello, my name is ${this.#name.value}`)
  }

  introduceMySelf () {
    console.log(`I am ${this.#birthday.age} years old`)
  }
}