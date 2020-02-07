function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 255, 255);
  //background(mouseX)
  noStroke();
  strokeCap(SQUARE)
  
  
  // red square
  rect(80, 0, 320, 320);
  if (mouseIsPressed) {
    fill(0, 0, 255);
    rect(80, 0, 320, 320);
  } else {
    fill(255, 0, 0);
    rect(80, 0, 320, 320);
  }
  // blue square
  if (mouseIsPressed) {
    fill(255, 0, 0);
    rect(0, 320, 80, 80);
  } else {
    fill(0, 0, 255);
    rect(0, 320, 80, 80);
  }
  
  // yellow one 
  fill(255, 255, 0);
  rect(370, 360, 30, 40)
  
  strokeWeight(13)
  stroke(0)
  line(80, 0, 80, 400); //left
  line(0, 320, 400, 320); //first
  line(370, 320, 370, 400); //right
   
  strokeWeight(15)
  line(370, 360, 400, 360); //on yellow
  
  strokeWeight(20)
  line(0, 160, 80, 160); //middle

}
