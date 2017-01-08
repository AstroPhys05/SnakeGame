# SnakeGame

A simple web SnakeGame made using JavaScript and the p5 js framework

Objective: The objective of this game is to make your snake as long as possible by eating food hence, getting a score as high as possible. You have to avoid touching any part of the snake and avoid crashing into the wall. 

Width: Amount of horizontal pixels 
Height: Amount of vertical pixels
Columns : Amount of horizontal pixels divided by scale 
Rows : Amount of vertical pixels divided by scale 

Objects:
Snake:
Updates location by adding x and y velocities to the innitial velocity.
Keyboard Events (arrow keys) changes the directions of the velocities by passing the new desired velocity of the snake.

Food:
Sets Food object in a random location. 

Both snake and food objects are floored to a scale value to give a grid like effect to the canvas.
