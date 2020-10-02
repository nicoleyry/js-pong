var posX = Math.floor(Math.random() * 300) + 50;
var posY = Math.floor(Math.random() * 200) + 50;
var size = 50;
var changeX = 0;
var changeY = 0;
var paddleX;
var paddleY;
var paddleWidth = 100;
var paddleHeight = 25;
var started = false;
var score = 0;
var btn;
var startBtn;

function setup() {
  createCanvas(windowWidth, windowHeight);

	// check if the game is started or not
	if (!started) {
		paddleX = windowWidth / 2;
		paddleY = windowHeight - 100;
		started = true;
	}
}

function draw() {
  background(0);

  // display the title
  startBtn = createElement("button", "JS Pong Game (click anywhere to start)");
  startBtn.position(windowWidth / 2 - 500, 100);
  startBtn.size(1000, 30);
  startBtn.style("background-color", "transparent");
  startBtn.style("border", "none");
  startBtn.style("color", "white");
  startBtn.style("text-align", "center");
  startBtn.style("font-family", "Helvetica");
  startBtn.style("font-size", "40px");

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
  if (posX > paddleX && posX < paddleX + paddleWidth && posY + size / 2 >= paddleY && started) {
		changeX *= -1;
    changeY *= -1;
    score ++;
  } else if (posY + size / 2 >= paddleY + paddleHeight) {
    gameover();
  }

  // draw the paddle
  fill(0, 255, 255);
  noStroke();
  rect(paddleX, paddleY, paddleWidth, paddleHeight);

  // display the score
  fill(0, 255, 255);
  textSize(24);
  textStyle(NORMAL);
  textAlign(LEFT);
  text("Score: " + score, 10, 25);

  // display the hint
  fill(255);
  textSize(16);
  textStyle(ITALIC);
  textAlign(RIGHT);
  text("Hint: Use arrow keys to control the paddle", windowWidth-40, 25);
}

function keyPressed() {
  // if the game isn't start, the paddle can't be moved
  if(started) {
    if (keyCode === LEFT_ARROW) {
      paddleX -= 50;
    } else if (keyCode === RIGHT_ARROW) {
      paddleX += 50;
    }
  }	
}

function gameover() {
	// if didn't catch the ball
	// stop the ball
	changeX = 0;
	changeY = 0;
	// set the game start to false
	started = false;

	// game over hint
	fill(255, 65, 77);
	textSize(50);
	textStyle(BOLD);
	textAlign(CENTER);
	text("GAME OVER 💀", windowWidth / 2, windowHeight / 2 - 50);
	textSize(30);
	text("Score: " + score, windowWidth / 2, windowHeight / 2);

	// display the replay btn
	btn = createElement("button", "Replay ⟲");
	btn.position(windowWidth / 2 - 50, windowHeight / 2 + 30);
	btn.size(100, 30);
	btn.style("background-color", "transparent");
	btn.style("border", "none");
	btn.style("color", "white");
	btn.style("font-family", "Helvetica");
	btn.style("font-size", "20px");
	btn.mousePressed(replay);
}

function replay() {
  started = true;
  posX = Math.floor(Math.random() * 300) + 50;
  posY = 50;
  changeX = 5;
  changeY = 5;
  score = 0; // reset the score
  paddleX = windowWidth / 2;
  paddleY = windowHeight - 100;
  removeElements();
}

function mouseClicked() {
  changeX = random(4, 6);
  changeY = random(4, 6);
}