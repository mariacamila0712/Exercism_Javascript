
export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get columns() {
    const columns = [];

    for (let i = 0; i <= this.rows.length; i++) {
      columns[i] = this.rows.map((row) => {
        return row[i];
      });
    }
    return columns;
  }

  get rows() {
    let rows = this.matrix;

    rows = rows.split('\n');
    const resultado = rows.map((row) => {
      const dividir_resultado = row.split(' ');

      return dividir_resultado.map((number) => {
        return Number(number);
      });
    });
    return resultado;
  }
}
