

// setup function by p5 framework to give us the
//    setup of the canvas and the snake object
function setup(){
  snake = new Snake();
  snake.update();
  snake.show();

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
