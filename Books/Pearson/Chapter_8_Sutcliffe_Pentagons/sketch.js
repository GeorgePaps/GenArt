// Maximum levels of recursion 
let maxLevels = 5;
let width = 500;
let height = 500;
// let pointArr = [];

function setup() {
  createCanvas(width, height);
  // Create a new instance of the class FractalRoot 
  background(220);
  // 
  pentagon = new FractalRoot();
  pentagon.drawShape();
}

class PointObj {
  // A very simple object that is just a point 
  constructor(ex, why) {
    this.x = ex;
    this.y = why;
  }
}

class FractalRoot {

  // Constructor does not need any input
  constructor() {
    this.centX = width / 2;
    this.centY = height / 2;
    // Array to hold the points
    this.pointArr = [];
    let count = 0;
    for (let i = 0; i < 360; i += 72) {
      this.x = this.centX + (200 * cos(radians(i)));
      this.y = this.centY + (200 * sin(radians(i)));
      this.pointArr[count] = new PointObj(this.x, this.y);
      count++;
    }
    this.rootBranch = new Branch(0, 0, this.pointArr);
  }

  drawShape() {
    let temp = this.rootBranch;
    temp.drawMe();
  }
}

class Branch {

  constructor(lev, n, outerPoints) {
    this.level = lev;
    this.num = n;
    this.outerPoints = outerPoints;
  }

  drawMe() {
    strokeWeight((5 - this.level) / 2);
    for (let i = 0; i < this.outerPoints.length; i++) {
      let nextI = i + 1;
      if (nextI == this.outerPoints.length) { nextI = 0; }
      line(this.outerPoints[i].x, this.outerPoints[i].y, this.outerPoints[nextI].x, this.outerPoints[nextI].y);
    }
  }
}


function draw() {
}
