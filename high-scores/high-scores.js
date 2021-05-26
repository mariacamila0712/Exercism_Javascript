 
 
 export class HighScores {
  constructor(arr) {
    this.highScores = arr;
  }

  get scores() {
    return this.highScores;
  }

  get latest() {
    return this.highScores[this.highScores.length - 1];
  }

  get personalBest() {
    return Math.max(...this.highScores);
  }

  get personalTopThree() {
    return this.highScores.sort((a,b) => b-a).splice(0,3) 
  }
}