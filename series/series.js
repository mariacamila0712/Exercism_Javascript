
export class Series {
  constructor(digits) {
    this._digits = digits.split('').map(d => parseInt(d))
  }

  get digits() {
    return this._digits
  }

  set digits(digits) {
    this._digits = digits
  }

  slices(num) {
    let slicesList = []
    if (num > this._digits.length) {
      throw new Error('Slice size is too big.');
    }
    this._digits.forEach((n, i) => {
      if (i + num > this._digits.length) { return }
      slicesList.push(this._digits.slice(i, i + num))
    })
    return slicesList
  }
}