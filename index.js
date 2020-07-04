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
    
  }
  
}