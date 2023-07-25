
let col_back = [244, 241, 222]; // Eggshell
let margin = 60;

// parameters for combing


function setup() {

  pixelDensity(1);

  createCanvas(1400, 1000);
  background(254, 251, 244);
  fill(col_back);
  noStroke();
  rect(margin, margin, width - 2*margin, height - 2*margin);

  // create canvas
  loadPixels();
  for (let y = 0; y < height; y++){
    for (let x = 0; x < width; x++){
      let index = (x + y*width) * 4;
      // pixels[index + 0] = 
      // pixels[index + 1] = 
      // pixels[index + 2] = y % 255;
      // pixels[index + 3] = 2
    }
  }
  updatePixels();
}




