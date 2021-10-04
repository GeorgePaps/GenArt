let width = 500;
let height = 500;

// col_back = [239, 231, 195]; // Lemon Meringue
col_back = [244, 241, 222]; // Eggshell

// Noise parameters 

let x_noise = 0.2;
let y_noise = 0.5;
let noise_amp = 25;

function setup() {
  createCanvas(width, height);
  background(col_back);

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