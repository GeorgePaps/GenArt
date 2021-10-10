let int_num = 10;
let width = 500;
let height = 300;
let circle_arr = [];

class Circle {

  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.radius = random(100) + 10;
    this.linecol = color(random(255), random(255), random(255));
    this.filcol = [random(255), random(255), random(255)];
    this.alph = random(255);
    this.xmove = random(10) - 5;
    this.ymove = random(10) - 5;
  }

  drawMe() {
    noStroke();
    fill(...this.filcol, this.alph);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    stroke(this.linecol, 150);
    noFill();
    ellipse(this.x, this.y, 10, 10);
  }

  updateMe() {
    this.x += this.xmove;
    this.y += this.ymove;
    if (this.x > (width + this.radius)) { this.x = 0 - this.radius; }
    if (this.x < (0 - this.radius)) { this.x = width + this.radius; }
    if (this.y > (height + this.radius)) { this.y = 0 - this.radius; }
    if (this.y < (0 - this.radius)) { this.y = height + this.radius; }
    // let touching = false;
    for (let i = 0; i < circle_arr.length; i++) {
      // otherCirc = ;
      if (circle_arr[i] != this) {
        let dis = dist(this.x, this.y, circle_arr[i].x, circle_arr[i].y);
        // if ((dis - this.radius - circle_arr[i].radius) < 0) {
        //   touching = true;
        //   break;
        // }
        let overlap = dis - this.radius - circle_arr[i].radius;
        if (overlap < 0) {
          let midx = (this.x + circle_arr[i].x) / 2;
          let midy = (this.y + circle_arr[i].y) / 2;
          stroke(0, 100);
          noFill();
          overlap *= -1;
          ellipse(midx, midy, overlap, overlap);
        }
      }
    }
    // if (touching) {
    //   if (this.alph > 0) { this.alph--; }
    // } else {
    //   if (this.alph < 255) { this.alph += 2; }
    // }
    // this.drawMe();
  }

}

function setup() {
  createCanvas(width, height);
  background(255);
  strokeWeight(1);
  fill(150, 50);
  drawCircles();
}


function draw() {
  background(255);
  for (let i = 0; i < circle_arr.length; i++) {
    thisCirc = circle_arr[i];
    thisCirc.updateMe();
  }
}

function mouseReleased() {
  drawCircles();
  console.log(circle_arr.length);
}

function drawCircles() {
  for (let i = 0; i < int_num; i++) {
    thisCirc = new Circle();
    // thisCirc.drawMe();
    circle_arr.push(thisCirc);
  }
}