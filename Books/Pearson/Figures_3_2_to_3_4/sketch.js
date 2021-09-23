let x_step = 10;
let y_step = 10;
let last_x = -999;
let last_y = -999;
let y = 50;
let width = 500;
let height = 100;
let border_x = 20;
let border_y = 10;

function setup() {
  createCanvas(width, height);
  background(220);
  strokeWeight(5);
  for (let x = border_x; x <= width - border_x; x += x_step) {
    // min 0 and max is height - border_y
    // think of it this way
    // y = border_y + random(height - 2 * border_y);

    y_step = random(20) - 10; // range -10 to 10
    y += y_step;

    if (last_x > -999) {
      line(x, y, last_x, last_y);
    }
    last_x = x;
    last_y = y;
  }
}

function draw() {
}
