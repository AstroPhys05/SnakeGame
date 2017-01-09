// setup function by p5 framework to give us the
//    setup of the canvas and the snake object
function setup(){
  createCanvas(600,600);
  snake = new Snake();
  food = new Food();
  frameRate(fps);
}


// p5 draw function draws the background and the snake
function draw() {
  background(50);
  snake.update();
  snake.show();
  snake.GameOver();
  food.show();

  if (snake.eat(food)) {
    food = new Food();
    snake.total++;
    score.innerHTML = "Score: " + TotalScore;
    TotalScore++;
  }
}

// Keyboard Controls of the snake
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            snake.direction(-1, 0);
            break;
        case 38:
            snake.direction(0, -1);
            break;
        case 39:
            snake.direction(1, 0);
            break;
        case 40:
            snake.direction(0, 1);
            break;
    }
};



function mousePressed(){
  snake.total = 0;
  snake.tail = [];
  score.innerHTML = "Score: 0";
  snake.x = 300;
  snake.y = 300;
}
