let width = 400;
let height = 200;
let margin = 2;
let img;

let col_back = [255, 255, 255 ];

function setup() {
  createCanvas(width, height);
  background(col_back);

  
  rectMode(CENTER)
  for (let i = 2; i < width; i+=1) {
    for (let j = 2; j < height; j+=1){
      noStroke();
      fill(255*noise(i/20,j/20));
      rect(i, j,  1, 1);  
    }
  }
  
  // Draw the margins
  
  fill(255);
  rectMode("corner");
  rect(0, 0, width-margin, margin);
  rect(width-margin, 0, margin, height-margin);
  rect(margin, height - margin, width - margin, margin);
  rect(0, margin, margin, height - margin);
  
  // saveCanvas('NoisePerlin.png', 'png'); 
  
  img = loadImage('NoisePerlin.png')

}
