let width = 500;
let height = 500;

let r_circ = [200, 175, 150];
let theta = [0, 0, 0];

let delta_theta = [2, 2, 2];
let delta_theta_noise = [0.1, 0.1, 0.1];
// plus or minus how much theta can defer
let delta_theta_un = [3, 3, 3];

let opacity_range = [110, 110, 110];
let opacity_noise = [0.5, 0.5, 0.5];

let lin_width = [2, 2, 2];

let seg_width_in = [5, 5, 5];
let seg_width_range = [10, 10, 10];
let seg_width_noise = [5, 5, 5];

let rep = [360, 360, 360];



let fr_rpm = 30;

// col_back = [239, 231, 195]; // Lemon Meringue
col_back = [244, 241, 222]; // Eggshell
// col_circle = [114, 61, 70]; // Catawba
// col_circle = [114, 61, 70]; // Catawba
col_circle = [[224, 122, 95], // Terra Cotta 
[61, 64, 91],
[42, 69, 54]
]; // Independence Blue 

// Noise parameters 

let x_noise = 0.2;
let y_noise = 0.5;
let noise_amp = 25;

function setup() {
  createCanvas(width, height);
  background(col_back);
  frameRate(fr_rpm);

  let i = 0;
  let j = 0;

  for (i = 0; i <= width; i++) {
    for (j = 0; j <= height; j++) {
      // noise(i * x_noise, j * y_noise) * 255
      // stroke(noise(i * x_noise, j * y_noise) * 255);

      let noise_factor = noise(i * x_noise, j * y_noise) * noise_amp - noise_amp / 2;

      stroke(col_back[0] + noise_factor,
        col_back[1] + noise_factor,
        col_back[2] + noise_factor);
      point(i, j);
    }
  }

}


let last_x = [0, 0];
let last_y = [r_circ[0], r_circ[1]];

function draw() {

  translate(width / 2, height / 2);

  for (let k = 0; k < r_circ.length; k++) {

    let delta_th = delta_theta[k] - delta_theta_un[k] / 2 + noise(theta[k] * delta_theta_noise[k]) * delta_theta_un[k];

    if (theta[k] <= 360) {


      // let delta_th = delta_theta - delta_theta_noise / 2 + Math.random(theta * delta_theta_noise) * delta_theta_un ;


      angleMode(DEGREES);

      stroke(...col_circle[k], 200 - opacity_range[k] / 2 + opacity_range[k] * noise(theta[k] * opacity_noise[k]));

      strokeWeight(lin_width[k]);

      let seg_width = seg_width_in[k] - seg_width_range[k] / 2 + noise(theta[k] * seg_width_noise[k]) * seg_width_range[k];

      line(last_x[k] - seg_width * sin(theta[k]),
        last_y[k] - seg_width * cos(theta[k]),
        last_x[k] + seg_width * sin(theta[k]),
        last_y[k] + seg_width * cos(theta[k]));

      theta[k] += delta_th;

      last_x[k] = sin(theta[k]) * r_circ[k];
      last_y[k] = cos(theta[k]) * r_circ[k];
    }
    if (frameCount == 250) {
      saveCanvas();
    }
  }
}

