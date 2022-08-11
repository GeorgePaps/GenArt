// Parameters for controlling the sketch

// Colors used in the arcs
let cols = ["#E07A5F", "#E07A5F", "#3D405B", "#3D405B",
  "#81B29A", "#F2CC8F"];
// Mean number of arcs in each circle 
// let mean_arcs = 4;
/* [1-99] in pixels value denoting how big the gaps between arcs
in succession */
let gaps_arcs = 200; // 70, 250 
// [1-99] in pixels value denoting how wide the arcs are
let width_arcs = 3; // 6, 30
/* [1-99] in pixels value denoting how big the gaps will be between 
adjacent circles */
let gaps_circ = 23; // 25, 60


function setup() {

  createCanvas(1000, 1000);
  background("#F4F1DE");
  translate(width / 2, height / 2, 0);


  let r = gaps_circ;
  let th_trim = 0;

  let i = 0;
  while (r < 0.9 * width) {

    th_trim = gaps_arcs / (2 * PI * r);
    th_off = random(360);
    strokeWeight(width_arcs);
    noFill();

    color = random(cols);
    stroke(color);
    arc(0, 0, r, r,
      th_off + PI / 2 + th_trim, th_off + PI - th_trim);

    color = random(cols);
    stroke(color);
    arc(0, 0, r,
      r,
      th_off + PI + th_trim, th_off + 3 * PI / 2 - th_trim);

    color = random(cols);
    stroke(color);
    arc(0, 0, r,
      r,
      th_off + 3 * PI / 2 + th_trim, th_off - th_trim);

    color = random(cols);
    stroke(color);
    arc(0, 0, r,
      r,
      th_off + th_trim, th_off + PI / 2 - th_trim);

    i++;
    r += gaps_circ + width_arcs;
  }
  // saveCanvas('thin', 'jpg');
}
