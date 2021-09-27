let height = 300;
let width = 300;

let x_start = Math.random(10);
let x_noise = x_start;
let y_noise = Math.random(10);

function setup() {
  createCanvas(height, width);
  smooth();
  background(0);
  for (let y = 0; y <= height; y += 5) {
    y_noise += 0.1;
    x_noise = x_start;
    for (let x = 0; x <= width; x += 5) {
      x_noise += 0.1;
      drawPoint(x, y, noise(x_noise, y_noise));
    }
  }
}

// function drawPoint(x, y, noiseFactor) {
//   let len = 10 * noiseFactor;
//   rect(x,y,len,len);
// }

// function drawPoint(x, y, noiseFactor) {
//   push();
//   translate(x, y);
//   rotate(noiseFactor * radians(360));
//   stroke(0, 150);
//   line(0, 0, 20, 0);
//   pop();
// }

function drawPoint(x, y, noiseFactor) {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(540));
  let edgeSize = noiseFactor * 35;
  let grey = 150 + (noiseFactor * 120);
  let a = 150 + (noiseFactor * 120);
  noStroke();
  fill(grey, a);
  ellipse(0, 0, edgeSize, edgeSize / 2);
  pop();
}


