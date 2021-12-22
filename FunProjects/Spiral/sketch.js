
let colors = ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'];
let bg_col = ['#F4F1DE'];

let width = 1000;
let height = 1000;

let radius = 10;
let cent_X = width / 2;
let cent_Y = height / 2;

let ang_max = 3600 - 720;
let last_x = -999;
let last_y = -999;

function setup() {
  createCanvas(width, height);
  background(bg_col);

  strokeWeight(5);
  stroke(0, 30);
  noFill();

  stroke(20, 50, 70);
  for (let ang = 0; ang <= ang_max; ang += 5) {
    radius += 0.75;
    let rad = radians(ang);
    let x = cent_X + (radius * cos(rad));
    let y = cent_Y + (radius * sin(rad));
    let col = random(colors);
    stroke(col);
    strokeWeight(ang / ang_max * 20 + 5);
    point(x, y);
  }

}

function draw() {

}