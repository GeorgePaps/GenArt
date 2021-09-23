let x_step = 1;
let last_x = -999;
let last_y = -999;
let angle = 0;
let y = 50;

function setup() {
  createCanvas(500, 100);
  background(180);
  strokeWeight(5);

  for (let x = 20; x <= 480; x += x_step) {
    let rad = radians(angle);
    // y = 50 + (sin(rad)*40);
    // y = 50 + (pow(sin(rad),3)*40);
    y = 50 + (pow(sin(rad), 3) * noise(rad * 2) * 40);

    if (last_x > -999) {
      line(x, y, last_x, last_y);
    }
    last_x = x;
    last_y = y;
    angle++;
  }

}

function draw() {
}

function mousePressed() {
  rect(mouseX, mouseY, 50, 50);
}
