let diam = 10;
let centX = width / 2;
let centY = height / 2;

function setup() {
  createCanvas(500, 300);
  frameRate(24);
  background(180);
  stroke(0);
  strokeWeight(1);
  fill(255, 25);
}

function draw() {
  if (diam <= 400) {
    // background(180);
    ellipse(250, 150, diam, diam);
    diam += 10;
  }
}

function mousePressed() {
  rect(mouseX, mouseY, 50, 50);
}
