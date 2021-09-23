
let width = 1400;
let height = 400;
let border = 40;
let xStart = border;
let xEnd = width - border;
let yStart = height / 2;
let yEnd = height / 2;
let lineTotWeight = 1.25;
let stepLine = 1;
let numLines = 100;
let numRedLines = 3;

let BGCOL = color("#EFE7C3");
let LineCols = ["#604532", "#D1CDC1"];

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
    let LineAlpha = random(50, 100);
    // let LineAlpha = 150;
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

  //   strokeWeight(5);
  //   let i_red = 0;
  //   for (i; i < numRedLines; i++) {
  //     let lastX_red = -999;
  //     let lastY_red = -999;
  //     let y_red = yStart;
  //     let x_red = xStart;
  //     let LineCol_red = color("#723D46");
  //     let LineAlpha_red = 200;
  //     LineCol.setAlpha(LineAlpha_red);
  //     stroke(LineCol_red);
  //     for (x_red; x_red <= xEnd; x_red += stepLine) {
  //       if (lastX > -999) {
  //         // y = height / 2 - 50 + random(100);
  //         y_red = height / 2 - 100 + noise(x_red / 100, i_red) * 200;
  //         if (x_red == xEnd) {
  //           y_red = height / 2;
  //         }
  //         line(x_red, y_red, lastX_red, lastY_red);
  //       }
  //       lastX_red = x_red;
  //       lastY_red = y_red;
}
//   }
// }

// function draw() {
// }
