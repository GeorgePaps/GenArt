// the purpose of this exercise is to explore how the color 
// change when you add to their RGB values. 

let col_back = [244, 241, 222]; // Eggshell
let margin = 60;

// parameters for combing
let combWidth = 200;
let combVarR = 50;
let combVarG = 50;
let combVarB = 50;
let combVarA = 50;

function setup() {

  pixelDensity(1);
  createCanvas(1400, 1000);

  noStroke();
  fill(254, 251, 244);
  rect(0,0,width,height/3);
  fill(255, 235, 223);
  rect(0,height/3,width,height/3);
  fill(215,124,105);
  rect(0,2*height/3,width,height/3);

  // create canvas
  loadPixels();
  for (let y = 0; y < height; y++){
      for (let x = width/4; x < width; x++){
      let index = (x + y*width) * 4;
        pixels[index + 0] += (cos(x/combWidth*2*PI) - 1)*combVarR/2; 
        pixels[index + 1] += (cos(x/combWidth*2*PI) - 1)*combVarG/2;
        pixels[index + 2] += (cos(x/combWidth*2*PI) - 1)*combVarB/2;
        pixels[index + 3] += (cos(x/combWidth*2*PI) - 1)*combVarA/2;
    }
  }
  updatePixels();
}






