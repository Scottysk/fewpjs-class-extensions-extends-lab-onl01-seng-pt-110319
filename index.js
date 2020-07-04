class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get perimiter() {
    return this.sides.reduce((total, side) => total + side, 0);
  }
  
  
}