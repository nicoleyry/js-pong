var posX = Math.floor(Math.random() * 300) + 50;
var posY = 50;
var size = 50;
var changeX = 5;
var changeY = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(240, 138, 93);
  noStroke();
  ellipse(posX, posY, size, size);
  posX += changeX;
  posY += changeY;

  // change the direction when hitting the wall
  if (posX < size / 2 || posX > windowWidth - size) {
		changeX *= -1;
  }
  if (posY < size / 2 || posY > windowHeight - size) {
		changeY *= -1;
  }
}