// TO-DO

// Add combs
// Add noise to lines
// Make line curves
// Lines with slope
// Use line deconstruction

// Make width and height variables
let height = 800;
let width = 800;

let col_back = [239, 231, 195]; // Lemon Meringue
// let string_col = [42, 61, 69]; // Charcoal BLue
let string_col = [72, 74, 71]; // Davy's Grey  
let comp_col = [114, 61, 70]; // Catawba 

// Margin from where lines will begin
// Times mean width height is greater than side margins
let margin_factor = 15;
let margin = (height + width) / 2 / margin_factor;
// How dense will the canvas be in the x direction
let dens_x = 3;
// How dense will the canvas be in the y direction
let dens_y = 3;
// How much high the tis of vertical lines will be
let x_tips = 5;
let y_tips = 5;

let line_weight = 0.5;
let line_op = 125;

// Module for comps

let comps = true;

// Define the percentage of x direction to be filled with lines [0-1]
let partial_x = 0.85;
// Define the percentage of y direction to be filled with lines [0-1]
let partial_y = 0.70;

// Initial points for drawing lines
let x_point = margin;
let y_point = margin;

function setup() {
  createCanvas(height, width);
  background(col_back);
  // impossibly high number so it reaches max speed
  frameRate(300);
}

function draw() {

  strokeWeight(line_weight);
  strokeCap(ROUND);

  // Draw vertical lines
  if (x_point <= (width * partial_x - margin)) {
    let x_start = x_point;
    let x_end = x_point;
    let y_start = margin - x_tips;
    let y_end = height - margin + x_tips;

    stroke(...string_col, line_op);
    line(x_start, y_start, x_end, y_end);
    x_point += dens_x;
  }
  if (y_point <= (height - margin) * partial_y) {
    let x_start = margin - y_tips;
    let x_end = width - margin + y_tips;
    let y_start = y_point;
    let y_end = y_point;


    stroke(...string_col, line_op);
    line(x_start, y_start, x_end, y_end);
    y_point += dens_y;
  }

  // if (comps){
  //   stroke(...comp_col);
  //   fill(...comp_col);
  //   circle(x_point,y_point,4);
  // }

}
