var posX = Math.floor(Math.random() * 300) + 50;
var posY = 50;
var size = 50;
var changeX = 5;
var changeY = 5;
var paddleX;
var paddleY;
var paddleWidth = 100;
var paddleHeight = 25;
var started = false;
var score = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  // draw the ball
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
  // change the direction when hitting the paddle
  if (posX > paddleX && posX < paddleX + paddleWidth && posY + size / 2 >= paddleY) {
		changeX *= -1;
    changeY *= -1;
    score ++;
  }

  // check if the game is started or not
  if (!started) {
		paddleX = windowWidth / 2;
		paddleY = windowHeight - 100;
		started = true;
  }

  // draw the paddle
  fill(0, 255, 255);
  noStroke();
  rect(paddleX, paddleY, paddleWidth, paddleHeight);

  // display the score
  fill(0, 255, 255);
  textSize(24);
  text("Score: " + score, 10, 25);
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		paddleX -= 50;
	} else if (keyCode === RIGHT_ARROW) {
		paddleX += 50;
	}
}