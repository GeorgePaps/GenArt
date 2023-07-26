
let col_back = [244, 241, 222]; // Eggshell
let margin = 60;

// parameters for combing
let combWidth = 2;
let combHeight = 12;
let combVarR = 25;
let combVarG = 25;
let combVarB = 25;
let combVarA = 20;

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
      if (floor(x/combWidth) % 2 == 0){
        pixels[index + 0] += cos(y/combHeight*2*PI)*combVarR; 
        pixels[index + 1] += cos(y/combHeight*2*PI)*combVarG;
        pixels[index + 2] += cos(y/combHeight*2*PI)*combVarB;
        pixels[index + 3] += cos(y/combHeight*2*PI)*combVarA;
      }
      else {
        pixels[index + 0] -= cos(y/combHeight*2*PI)*combVarR; 
        pixels[index + 1] -= cos(y/combHeight*2*PI)*combVarG;
        pixels[index + 2] -= cos(y/combHeight*2*PI)*combVarB;
        pixels[index + 3] -= cos(y/combHeight*2*PI)*combVarA;
      }

    }
  }
  updatePixels();
}




