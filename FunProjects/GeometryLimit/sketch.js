// I give the width and the height manually 
let height = 1000;
let width = 1000;

// ---------- Colors ----------

let back_color = [42, 51, 59]; // Charcoal Blue
let line_col = [221, 201, 180];  // Almond

// ---------- Controls ------------

let diam = 800;
let circle_lin_width = 2;
let polygon_lin_width = 2;
let circle_switch = false;
let num_levels = 80;
let num_edges = 15;


function setup() {
  createCanvas(height, width);
  background(back_color);

  // Create the circle if needed 
  if (circle_switch) {
    noFill();
    stroke(line_col);
    strokeWeight(circle_lin_width);
    ellipse(height / 2, width / 2, diam, diam);
  }

  // Pick a random theta for start 
  let theta0 = Math.random() * 360;
  let theta = theta0;
  let points = [];

  let cur_level = 0;

  // Create the points for the first polygon 
  for (let i = 0; i < num_edges; i++) {
    let x = width / 2 + cos(radians(theta)) * diam / 2;
    let y = height / 2 - sin(radians(theta)) * diam / 2;
    append(points, [x, y]);
    theta = theta + 360 / (num_edges);
  }

  pol = new Polygon(points, cur_level);
  pol.draw();

  // Creates the additional polygons if necessary 
  cur_level = 1;

  while (cur_level < num_levels) {

    mid_points = [];
    for (let j = 0; j < num_edges; j++) {
      let x = points[j % num_edges][0] / 2 + points[(j + 1) % num_edges][0] / 2;
      let y = points[j % num_edges][1] / 2 + points[(j + 1) % num_edges][1] / 2;
      append(mid_points, [x, y]);
    }
    pol = new Polygon(mid_points, cur_level);
    pol.draw();
    cur_level += 1;
    points = mid_points;
  }
}

class Polygon {

  constructor(points, level) {
    this.points = points;
    this.level = level;
  }

  draw() {
    for (let i = 0; i < this.points.length; i++) {
      strokeWeight(polygon_lin_width);
      let opac = noise(num_levels * 255)
      stroke(line_col, opac);
      line(this.points[i][0], this.points[i][1], this.points[(i + 1) % num_edges][0], this.points[(i + 1) % num_edges][1]);
    }
  }
}


function draw() {
}
