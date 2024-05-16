import { ulid } from 'ulid'
import assert from 'assert'

export class PersonId {
  #value

  constructor (value = ulid()) {
    assert(typeof value === 'string')
    this.#value = value
  }

  get value () {
    return this.#value
  }

  equals (personId) {
    return this.#value === personId.#value
  }
}