
let col_back = [255, 235, 223]; // Eggshell
let margin = 60;

// parameters for combing
let combWidth = 2;
let combHeight = 18;
let combVarR = 20;
let combVarG = 20;
let combVarB = 20;
let combVarA = 30;

let noiseSize = 10;
let noiseFrequency = 100; // the greater the sparser

function setup() {

  pixelDensity(1);

  createCanvas(1400, 1000);
  background(255, 255, 244);
  fill(col_back);
  noStroke();
  rect(margin, margin, width - 2*margin, height - 2*margin);
  // fill(215,124,105);
  // rect(margin*2, margin*2, width - 4*margin, height - 4*margin);

  // create canvas
  loadPixels();
  for (let y = 0; y < height; y++){
    for (let x = 0; x < width; x++){
      let index = (x + y*width) * 4;
      if (floor(x/combWidth) % 2 == 0){
        pixels[index + 0] += (cos(y/combHeight*2*PI)-1)/2*combVarR - bNoise(x,y, noiseSize, noiseFrequency); 
        pixels[index + 1] += (cos(y/combHeight*2*PI)-1)/2*combVarG - bNoise(x,y, noiseSize, noiseFrequency);
        pixels[index + 2] += (cos(y/combHeight*2*PI)-1)/2*combVarB - bNoise(x,y, noiseSize, noiseFrequency);
        pixels[index + 3] += (cos(y/combHeight*2*PI)-1)/2*combVarA - bNoise(x,y, noiseSize, noiseFrequency);
      }
      else {
        pixels[index + 0] += (cos(y/combHeight*2*PI - PI)-1)/2*combVarR - bNoise(x,y, noiseSize, noiseFrequency); 
        pixels[index + 1] += (cos(y/combHeight*2*PI - PI)-1)/2*combVarG - bNoise(x,y, noiseSize, noiseFrequency);
        pixels[index + 2] += (cos(y/combHeight*2*PI - PI)-1)/2*combVarB - bNoise(x,y, noiseSize, noiseFrequency);
        pixels[index + 3] += (cos(y/combHeight*2*PI - PI)-1)/2*combVarA - bNoise(x,y, noiseSize, noiseFrequency);
      }

    }
  }
  updatePixels();
}

function bNoise(x,y,size, frequency){
  return noise(x/frequency,y/frequency)*size
}





