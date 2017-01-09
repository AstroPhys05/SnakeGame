// Snake Constructor function
function Snake() {
  // initial values of the snake
  this.x = 300;
  this.y = 300;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 1;
  this.tail = [];

  // Moves the Snake around the grid based on itsx, y speeds
  this.update = function() {
    // Moves the snake around the canvas by chaning positions by velocity var
    this.x = this.x + this.xspeed * SnakeSize;
    this.y = this.y + this.yspeed * SnakeSize;
    // constrains the x and y values of snake inside the canvas
    this.x = constrain(this.x, 0, width - SnakeSize);
    this.y = constrain(this.y, 0, height - SnakeSize);

    if (this.total === this.tail.length){
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);
  }

  // Draws the Snake using p5 on the canvas
  this.show = function() {
    fill(225);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, SnakeSize, SnakeSize);
    }
    rect(this.x, this.y, SnakeSize, SnakeSize);
  }

  // changes the speed in the direction given to the function
  this.direction = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  // When distance (p5 function) of the snake and food is close, snake
  //    eats the food and new food is created somewhere on canvas
  this.eat = function(FoodPos) {
  var distance = dist(this.x, this.y, FoodPos.x, FoodPos.y);
  if (distance <= 1) {
    return true;
    this.total++;
  } else {
    return false;
  }
  }

 this.GameOver = function() {
   if (this.x === 0 || this.x === width || this.y === 0 || this. y === height) {
     snake.total = 1;
     snake.tail = [];
     score.innerHTML = "Score: 0";
     snake.x = 300;
     snake.y = 300;
   }
 }
 }
