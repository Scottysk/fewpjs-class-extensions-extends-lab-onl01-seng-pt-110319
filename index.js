class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get perimiter() {
    return this.sides.reduce((accumulate, side) => accumulate + side, 0);
  }
  
  
}