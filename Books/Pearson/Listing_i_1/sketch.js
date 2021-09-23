function setup() {
  createCanvas(2000, 2000);
  background(150);
  stroke(0, 50);
  fill(255, 200);
  let xstart = random(10);
  let ynoise = random(10);
  translate(width / 2, height / 2, 0);

  for (let y = -(height / 8); y <= (height / 8); y += 3) {
    ynoise += 0.02;
    let xnoise = xstart;
    for (let x = -(width / 8); x <= (width / 8); x += 3) {
      xnoise += 0.02;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}


function drawPoint(x, y, noiseFactor) {
  push();
  translate(x * noiseFactor * 4, y * noiseFactor * 4, -y);
  let edgeSize = noiseFactor * 26;
  ellipse(0, 0, edgeSize, edgeSize);
  pop();
}
