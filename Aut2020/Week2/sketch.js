const URL = [
  "https://coolors.co/2e4632-af5b5b-7284a8-e07a5f-fcd0a1",
  "https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f"
];

let COLS;
let BGCOL;
let num_circles = 150;

function setup() {
  createCanvas(800, 800);
  COLS = shuffle(createCols(random(URL)));
  BGCOL = COLS[0];
  background(BGCOL);
  COLS.shift();
  frameRate(10);
  for (let i = 0; i < num_circles; i++) {
    fill(random(COLS));
    // stroke(random(COLS));
    // strokeWeight(2);
    noStroke();
    let center_X = random(width);
    let center_Y = random(height);
    let diam = random(width / 50, width / 5);
    ellipse(center_X, center_Y, diam, diam);
  }
}

function draw() {
}

function createCols(url) {
  let slaIndex = url.lastIndexOf("/");
  let colStr = url.slice(slaIndex + 1);
  let cols = colStr.split("-");
  for (let i = 0; i < cols.length; i++) {
    cols[i] = "#" + cols[i];
  }
  return cols;
}