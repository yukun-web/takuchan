import { ulid } from 'ulid'
import assert from 'assert'

export class Id {
  #value

  constructor (value = ulid()) {
    assert(typeof value === 'string')
    this.#value = value
  }

  get value () {
    return this.#value
  }

  equals (otherId) {
    return otherId instanceof Id && this.#value === otherId.#value
  }
}