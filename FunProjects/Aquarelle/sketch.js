// ------------------------- //
// ------ Input Params ----- //
// ------------------------- //

let width = 500;
let height = 500;

// let col_back = [239, 231, 195]; // Lemon Meringue
let col_back = [244, 241, 222]; // Eggshell
let col_main = [82, 121, 111]; // hookers green
 
// Noise parameters
let boolA = 1;
let noiseRatio = 2.5;
let x_freqA = 100;
let x_freqB = 4;
let y_freqA = x_freqA * noiseRatio;
let y_freqB = 4;
let noise_ampA = 25;
let noise_ampB = 45;

// ---------------------- //
// ------ Main Code ----- //
// ---------------------- //

function setup() {
  createCanvas(width, height);
  background(col_back);

  for (let i = 0; i <= width; i++) {
    for (let j = 0; j <= height; j++) {

      noise_factorA =
        noise((i * x_freqA) / width, (j * y_freqA) / height) * noise_ampA -
        noise_ampA / 2;

      noise_factorB =
        noise((i * x_freqB) / width, (j * y_freqB) / height) * noise_ampB -
        noise_ampB / 2;

      stroke(
        col_back[0] + boolA * noise_factorA + noise_factorB,
        col_back[1] + boolA * noise_factorA + noise_factorB,
        col_back[2] + boolA * noise_factorA + noise_factorB
      );
      point(i, j);
    }
  }

  

}
