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



OUR STORY:

## Inspiration
My favourite snake games all over the internet!

## What it does
We control a snake with up down right left arrow keys. We eat randomly generated food to make it as long as possible. And we are supposed to avoid touching the snake's body and the walls.

## How we built it
We built it in the Atom IDE. using HTML, CSS, Java script.

## Challenges we ran into
The snake not growing was our biggest challenge. Also making the snake generate and move in a grid-like area was another challenge.

## Accomplishments that we're proud of
We are proud of making the snake and the food spawn in the grid-like area. and moving the snake in that area.

## What we learned
We learned how to use framework and got better at java script, 

## What's next for Snake Game
The next step is to make a main menu and add the score to it. We also want to add poisonous food which will make the snake decrease its length.
