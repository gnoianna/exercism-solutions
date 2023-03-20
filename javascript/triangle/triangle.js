//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    if (this.isTriangle()) {
      return this.sides.every((side) => side === this.sides[0]);
    }
    return false;
  }

  get isIsosceles() {
    if (this.isTriangle()) {
      return new Set(this.sides).size !== this.sides.length;
    }
    return false;
  }

  get isScalene() {
    if (this.isTriangle()) return !this.isIsosceles;
    return false;
  }

  isTriangle() {
    const [a, b, c] = this.sides;
    return (
      this.sides.every((side) => side > 0) &&
      a + b >= c &&
      a + c >= b &&
      b + c >= a
    );
  }
}
