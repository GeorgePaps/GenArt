
// Parameters that might be relaxed
let numLines = 1000;
let amp = 400; // total amplitude of line
let noise_x_factor = 1000; // how smooth the noise will be 
let noise_y_factor = 50; // how smooth the noise will be 
let lineWeight = 1;

let width = 1500;
let height = 600;
let border = 40;
let xStart = border;
let xEnd = width - border;
let yEnd = height / 2;
let stepLine = 1;

// let BGCOL = color("#EFE7C3"); // Lemon Meringue (beige)
let BGCOL = color("#EFE7C3"); // Lemon Meringue (beige)
// Van Dyke Brown "#604532", Timberwolf (gray) "#D1CDC1"
// Space Cadet (Blue) "#262E41"
// Orange Yellow Crayola "#E9C46A"
// MSU Green "#2A4536"
let LineCols = ["#2A4536", "#E19E43"];

function setup() {
  createCanvas(width, height);
  background(BGCOL);

  strokeWeight(lineWeight);

  let i = 0;
  for (i; i < numLines; i++) {
    let lastX = -999;
    let lastY = -999;
    let y = height / 2 - amp / 2 + noise(xStart / noise_x_factor, i / noise_y_factor) * amp;
    let x = xStart;

    let LineAlpha = random(50, 100);
    let LineCol = color(random(LineCols));
    LineCol.setAlpha(LineAlpha);
    stroke(LineCol);

    for (x; x <= xEnd; x += stepLine) {
      if (lastX > -999) {
        y = height / 2 - amp / 2 + noise(x / noise_x_factor, i / noise_y_factor) * amp;
        line(x, y, lastX, lastY);
      }
      lastX = x;
      lastY = y;
    }
  }


  // saveCanvas();

}

//   }
// }

// function draw() {
// }
