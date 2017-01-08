// Snake Constructor function
function Snake() {
  // initial values of the snake
  this.x = 300;
  this.y = 300;
  this.xspeed = 0;
  this.yspeed = 0;

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      return true;
    } else {
      return false;
    }
  }

// Draws the Snake using p5 on the canvas
  this.show = function() {
    fill(255);
    rect(this.x, this.y, SnakeSize, SnakeSize);
    this.x = constrain(this.x, 0, width - SnakeSize);
    this.y = constrain(this.y, 0, height - SnakeSize);
  }

// Moves the Snake around the grid based on itsx, y speeds
  this.update = function() {
    this.x = this.x + this.xspeed * SnakeSize;
    this.y = this.y + this.yspeed * SnakeSize;
  }

// changes the speed in the direction given to the function
  this.direction = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
}
