class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get perimeter() {
    return this.sides.reduce((total, side) => total + side, 0);
  }
  
  
}

class Triangle extends Polygon {
  
  get isValid() {
    const [a, b, c] = this.sides;
    return a < b + c && b < c + a && c < a + b ? true : false;
  }
  
}