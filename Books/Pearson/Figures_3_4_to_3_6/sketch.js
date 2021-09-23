let width = 500;
let height = 100;

let step = 10;
let last_x = -999;
let last_y = -999;
let y_noise = random(10);
let y;

function setup() {
  createCanvas(width, height);
  background(255);
  strokeWeight(5);

  stroke(0, 30);
  line(20, 50, 480, 50);

  for (let x = 20; x <= 480; x += step) {

    // goes from 10 to 90 actually like having borders 
    // of 10
    y = 10 + noise(y_noise) * 80;

    if (last_x > -999) {
      line(x, y, last_x, last_y);
    }

    last_x = x;
    last_y = y;
    y_noise += 0.1;

  }
}

function draw() {
}
