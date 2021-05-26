
export class Matrix {
  constructor(str) {
    this.rowMatrix = str.split('\n').map(row => row.split(' ').map(element => +element));
  }

  get rows() {
    return this.rowMatrix;
  }

  get columns() {
    let columnMatrix = [];
    for (let i = 0; i < this.rowMatrix[0].length; i++) {
      let tempArray = [];
      for (let j = 0; j < this.rowMatrix.length; j++) {
        tempArray.push(this.rowMatrix[j][i]);
      }
     columnMatrix.push(tempArray);
    }
    return columnMatrix;
  }
}