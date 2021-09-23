let width = 1000;
let height = 1000;

let radius = 10;
let radius_noise = random(10);
let cent_X = width / 2;
let cent_Y = height / 2;

let ang_max = 1440;
let last_x = -999;
let last_y = -999;

function setup() {
  createCanvas(width, height);
  background(220);

  strokeWeight(0.5);
  stroke(0, 30);
  noFill();
  ellipse(cent_X, cent_Y, 200, 200);

  stroke(20, 50, 70);

  for (let i = 0; i < 100; i++) {
    radius = 10;
    stroke(random(20), random(50), random(70), 80);
    let start_angle = int(random(360));
    let end_angle = 1440 + int(random(1440));
    let angle_step = 5 + int(random(3));
    for (let ang = start_angle; ang <= end_angle; ang += angle_step) {
      radius_noise += 0.05;
      radius += 0.5;
      let this_radius = radius + (noise(radius_noise) * 200) - 100;
      let rad = radians(ang);
      let x = cent_X + (this_radius * cos(rad));
      let y = cent_Y + (this_radius * sin(rad));
      if (last_x > -999) {
        line(x, y, last_x, last_y);
      }
      last_y = y;
      last_x = x;

    }
  }
}

function draw() {

}
