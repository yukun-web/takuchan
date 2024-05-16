import assert from 'assert'

export class Name {
  #value

  constructor (value) {
    assert(typeof value === 'string')
    this.#value = value
  }

  get value () {
    return this.#value
  }
}