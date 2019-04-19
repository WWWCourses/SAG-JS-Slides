class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let r = new Rectangle(2,3);
console.log(r.height);
console.log(r.width);