// Food Constructor function
function Food() {

  var column = floor(width/scl);
  var row = floor(height/scl);
  this.x = floor(random(column)) * scl;
  this.y = floor(random(row)) * scl;

// Draws the food using p5 on the canvas
  this.show = function() {
    fill(100);
    rect(this.x, this.y, FoodSize, FoodSize);
  }
}
