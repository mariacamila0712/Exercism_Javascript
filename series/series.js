
export class Series {
  constructor(series) {
    if (series.length == 0) {
      throw new Error('series cannot be empty');
    }
    this.series = series.split("").map(x=>+x);
  }

  slices(sliceLength) {
    let result = [];
    if (this.series.length < sliceLength) {
      throw new Error('slice length cannot be greater than series length');
    } else if (sliceLength == 0) {
      throw new Error('slice length cannot be zero');
    } else if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }
    for (let i = 0; i < this.series.length - sliceLength + 1; i++) {
      result.push(this.series.slice(i, i + sliceLength));
    }
    return result;
  }
}