let height = 800;
let width = 800;

function setup() {
  createCanvas(height, width);

  sliderR = createSlider(0, 255, 100, 5);
  sliderR.position(width + 50, 20);
  sliderG = createSlider(0, 255, 100, 5);
  sliderG.position(width + 50, 80);
  sliderB = createSlider(0, 255, 100, 5);
  sliderB.position(width + 50, 140);

}

function draw() {
  background(sliderR.value(), sliderG.value(), sliderB.value());
}
