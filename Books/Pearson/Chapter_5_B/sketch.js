let width = 500;
let height = 500;

let radius = 200;

function setup() {
  createCanvas(width, height, WEBGL);
  background(200);
  stroke(0);
}

function draw() {
  // background(200);

  rotateY(frameCount * 0.03);
  rotateX(frameCount * 0.04);

  let s = 0;
  let t = 0;
  let last_x = 0;
  let last_y = 0;
  let last_z = 0;

  while (t < 180) {
    s += 18;
    t += 10;
    let radianS = radians(s);
    let radianT = radians(t);

    let this_x = 0 + (radius * cos(radianS) * sin(radianT));
    let this_y = 0 + (radius * sin(radianS) * sin(radianT));
    let this_z = 0 + (radius * cos(radianT));

    if (last_x != 0) {
      line(this_x, this_y, this_z, last_x, last_y, last_z);
    }

    last_x = this_x;
    last_y = this_y;
    last_z = this_z;
  }
}
