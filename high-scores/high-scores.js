export class HighScores {
  constructor(input) {
    this.input = input
  }

  get scores() {
    return this.input
  }

  get latest() {
    return this.input[this.input.length-1]
  }

  get personalBest() {    
    return sortArr(this.input)[0]
  }

  get personalTopThree() {
    let max = 0;
    if (this.input.length >= 3) {
      max = 3;
    } else {
      max = this.input.length;
    }
    return sortArr(this.input).slice(0,max)
  }
}

function sortArr(numArr) {
  return numArr.sort((a, b) => b - a); 
}