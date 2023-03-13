//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixAsString) {
    this.matrix = [];
    const martrixRows = matrixAsString.split("\n");
    martrixRows.forEach((row, rowIndex) => {
      this.matrix[rowIndex] = row.split(" ").map((item) => Number(item));
    });
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    let [firstRow] = this.matrix;
    return firstRow.map((_, columnIndex) =>
      this.matrix.map((matrixRow) => matrixRow[columnIndex])
    );
  }
}
