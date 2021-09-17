
let width = 1000;
let height = 400;
let border = 40;
let xStart = border;
let xEnd = width - border;
let yStart = height / 2;
let yEnd = height / 2;
let lineTotWeight = 1.5;
let stepLine = 1;
let numLines = 150;

let BGCOL = color("#F4F1DE");
let LineCols = ["#2A4536", "#E19E43"];

function setup() {
  createCanvas(width, height);
  background(BGCOL);

  strokeWeight(lineTotWeight);
  // strokeCap(SQUARE);
  let i = 0;
  for (i; i < numLines; i++) {
    let lastX = -999;
    let lastY = -999;
    let y = yStart;
    let x = xStart;
    let LineCol = color(random(LineCols));
    let LineAlpha = random(10, 70);
    LineCol.setAlpha(LineAlpha);
    stroke(LineCol);
    for (x; x <= xEnd; x += stepLine) {
      if (lastX > -999) {
        // y = height / 2 - 50 + random(100);
        y = height / 2 - 100 + noise(x / 100, i) * 200;
        if (x == xEnd) {
          y = height / 2;
        }
        line(x, y, lastX, lastY);
      }
      lastX = x;
      lastY = y;
    }
  }
}

// function draw() {
// }
