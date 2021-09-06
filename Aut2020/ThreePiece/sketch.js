//              blue      magenta   yellow      red 
let colors = ["#2c2060", "#4bd3e5", "#ffd919", "#ff4f19"];

let diamA = 300;
let width = 600;
let height = 450;

function setup() {
  createCanvas(width, height);
}

function draw() {
  background("#4bd3e5");

  // code for top left circle
  // stroke("#ff4f19");
  noStroke();
  fill("#ffd919");
  circle(0, 0, diamA);

  // code for middle line
  noStroke();
  fill("#fff1dd");
  quad(0, height * 2 / 3, 0, height, width, height, width, height * 1 / 3);

  // code for middle line
  noStroke();
  fill("#ff4f19");
  triangle(diamA / 2, diamA / 2, width - diamA / 2, height, width, height * 2 / 3);

}