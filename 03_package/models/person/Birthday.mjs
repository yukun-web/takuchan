export class Birthday {
  #value

  constructor (value) {
    this.#value = new Date(value)
  }

  get age () {
    const diff = new Date() - this.#value
    const age = new Date(diff)
    return Math.abs(age.getUTCFullYear() - 1970)
  }
}