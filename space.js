
var x, y;

function setup() {
  createCanvas(720, 400);//background size
  y = height / 2;
  x = width;//starting point of circle

}

function draw() {
  background(0,0,102);//background color
  
  stroke(255,255,0); // draws a circle 
  fill(255,255,0);//color of circle
  ellipse(x, y, 24, 24); //dimensions of circle
  
  y = y + random(-1, 1);//Jiggling randomly on the vertical axis
  x = x - 1;// moving from right to left at a constant speed
  
  if (x < 0) {
    x = width;
  }// reset to the right side

}

