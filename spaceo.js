var t = 255; //variable for the text's transparency which will change based on the user's action

var p = 0; //count of points
var numOfPoints = 7 //how many points will we want?

var x, y;


function setup() {
  createCanvas(720, 400);//background size
  y = height / 2;//starting point of circle halfway down y axis
  x = width;//starting point of circle on x axis
  a = height / 2
  b = width / 4
}

function draw() {
  background(0,0,102);//background color
  if (mouseIsPressed) {
        background(0, 0, 51);//change background color on click
         
      }

  stroke(255,255,0); // draws a circle 
  fill(255,255,0);//color of circle
  ellipse(x, y, 24, 24); //dimensions of circle
  
  y = y + random(-1, 1);//Jiggling randomly on the vertical axis
  x = x - 1;// moving from right to left at a constant speed
  
  if (x < 0) {
    x = width;
  }// reset to the right side

  ellipse(a,b,300,300)
  fill(50,100,0)
  stroke(50,100,0)


  //firefly
  fill(200,255,127,200); //white, semi-transparent
  ellipse(mouseX+50,mouseY+50,10,10); // follows the mouse, 10px dia
  //sparkly sky (points are redrawn randomly on the canvas everytime we go through the draw function
  stroke(255);

  for (p=0; p<numOfPoints; p=p+1) {
      point(random(0,width),random(0,height));


  }    

}