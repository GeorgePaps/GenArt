let width = 750;
let height = 500;
let maxLevels = 4;
let numChildren = 5;



function setup() {
  createCanvas(width, height);
  background(255);
  noFill();
  newTree();
}


function draw() {
  background(255);
  trunk.updateMe(width, height);
  trunk.drawMe();
}


function newTree() {
  // way to create a new branch object 
  // lev ind ex why you start with 0 and 1 at level and children
  // mostly the zero is important 
  // this variable needs to be accessed by the draw
  // function as well 
  trunk = new Branch(0, 1, width / 2, 50);
  // call draw me to design the object 
  trunk.drawMe();
}

// let children = [];

class Branch {

  // Here the branch is created 
  // ex and why are arbitrary points where you want to plant 
  // your tree
  constructor(lev, ind, ex, why) {
    this.level = lev;
    this.index = ind;
    this.ex = ex;
    this.why = why;
    // create a list with all the children 
    this.children = [];
    // this update me defines x, y, endx, endy
    this.updateMe(this.ex, this.why);

    if (this.level < maxLevels) {
      for (let x = 0; x < numChildren; x++) {
        this.children[x] = new Branch(this.level + 1, x, this.endx, this.endy);
      }
    }
  }
  updateMe(ex, why) {
    this.x = ex;
    this.y = why;
    this.endx = this.x + (this.level * (random(100) - 50));
    this.endy = this.y + 50 + (this.level * random(50));
  }

  drawMe() {

    let strokeW = (1 / this.level) * 100;
    let alp = 255 / this.level;
    let len = (1 / this.level) * random(200);
    let rot = random(360);
    let lenChange = random(10) - 5;
    let rotChange = random(10) - 5;

    strokeWeight(maxLevels - this.level + 1);
    line(this.x, this.y, this.endx, this.endy);
    ellipse(this.x, this.y, 5, 5);
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].drawMe();
    }
  }

}