let width = 800;
let height = 400;
let margin = 2;
let freq = 1;
let rectSize = 2;
let step = 2;


let col_back = [255, 255, 255 ];

function setup() {
  createCanvas(width, height);
  background(col_back);

  
  rectMode(CENTER);
  for (let i = margin + step / 2; i < width; i += step) {
    for (let j = margin + step / 2; j < height; j += step) {
      noStroke();
      x = i / width;
      y = j / height;
      fill(255 * noise(freq * x, freq * y));
      rect(i, j, rectSize, rectSize);
    }
  }

  // Draw the margins

  fill(255);
  rectMode("corner");
  rect(0, 0, width - margin, margin);
  rect(width - margin, 0, margin, height - margin);
  rect(margin, height - margin, width - margin, margin);
  rect(0, margin, margin, height - margin);
  
  // saveCanvas('PerlinNoise.png', 'png'); 

}
