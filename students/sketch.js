
var pos = createVector(100, 100);
var sped = createVector(2.5, 2);


function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  // Add the current speed to the position.
  pos.add(sped);

  if ((pos.x > width) || (pos.x < 0)) {
    sped.mult(-1);
  }
  if ((pos.y > height) || (pos.y < 0)) {
    sped.mult(-1);
  }

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(pos.x, pos.y, 48, 48);
}
