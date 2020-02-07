function setup() {
  createCanvas(400, 400);
}

function printA(x, y) {
  line(x+20, y, x, y+50);
  line(x+20, y, x+40, y+50);
  line(x+10, y+25, x+30, y+25);
}
  
function printB(x, y) {
  line(x, y, x, y+50);
  line(x, y, x+40, y);
  line(x+40, y, x+40, y+20);
  line(x, y+25, x+40, y+20);
  line(x, y+25, x+40, y+30);
  line(x+40, y+30, x+40, y+50);
  line(x, y+50, x+40, y+50);
}

function printC(x, y){
  line(x, y, x, y+50);
  line(x, y, x+40, y);
  line(x, y+50, x+40, y+50);
}

function printD(x, y){
  line(x, y, x, y+50);
  line(x, y, x+20, y);
  line(x+20, y, x+40, y+25);
  line(x+20, y+50, x+40, y+25);
  line(x, y+50, x+20, y+50);
}

function printE(x, y){
  line(x, y, x, y+50);
  line(x, y, x+40, y);
  line(x, y+25, x+35, y+25);
  line(x, y+50, x+40, y+50);
}

function printF(x, y){
  line(x, y, x, y+50);
  line(x, y, x+40, y);
  line(x, y+25, x+35, y+25);
}

function printG(x, y){
  line(x, y, x, y+45);
  line(x, y, x+35, y);
  line(x, y+45, x+35, y+45);
  line(x+20, y+30, x+40, y+30);
  line(x+40, y+30, x+40, y+50);
}

function printH(x, y){
  line(x, y, x, y+50);
  line(x, y+25, x+40, y+25);
  line(x+40, y, x+40, y+50);
} 

function printI(x, y){
  line(x, y, x+40, y);
  line(x+20, y, x+20, y+50);
  line(x, y+50, x+40, y+50);
}

function printJ(x, y){
  line(x+10, y, x+40, y);
  line(x+25, y, x+25, y+50);
  line(x, y+50, x+25, y+50);
  line(x, y+50, x, y+40);  
}

function printK(x, y){
  line(x, y, x, y+50);
  line(x, y+25, x+40, y);
  line(x, y+25, x+40, y+50);
}

function printL(x, y){
  line(x, y, x, y+50);
  line(x, y+50, x+40, y+50);
}

function printM(x, y){
  line(x, y, x, y+50);
  line(x, y, x+20, y+40);
  line(x+20, y+40, x+40, y);
  line(x+40, y, x+40, y+50);
}

function printN(x, y){
  line(x, y, x, y+50);
  line(x, y, x+40, y+50);
  line(x+40, y, x+40, y+50);
}

function printO(x, y){
  line(x, y, x, y+50);
  line(x, y, x+40, y);
  line(x+40, y, x+40, y+50);
  line(x, y+50, x+40, y+50);
}

function printP(x, y){
  line(x, y, x, y+50);
  line(x, y, x+40, y);
  line(x+40, y, x+40, y+25);
  line(x, y+25, x+40, y+25);
}

function printQ(x, y){
  line(x, y, x, y+45);
  line(x, y, x+35, y);
  line(x+35, y, x+35, y+45);
  line(x, y+45, x+35, y+45);
  line(x+20, y+30, x+40, y+50)
}

function printR(x, y){
  line(x, y, x, y+50);
  line(x, y, x+40, y);
  line(x+40, y, x+40, y+25);
  line(x, y+25, x+40, y+25);
  line(x, y+25, x+40, y+50);
}

function printS(x, y){
  line(x, y, x+40, y);
  line(x, y, x, y+25);
  line(x, y+25, x+40, y+25);
  line(x+40, y+25, x+40, y+50);
  line(x, y+50, x+40, y+50);
}

function printT(x, y){
  line(x, y, x+40, y);
  line(x+20, y, x+20, y+50);
}

function printU(x, y){
  line(x, y, x, y+50);
  line(x, y+50, x+40, y+50);
  line(x+40, y, x+40, y+50);
}

function printV(x, y){
  line(x, y, x+20, y+50)
  line(x+20, y+50, x+40, y)
}

function printW(x, y){
  line(x, y, x+10, y+50);
  line(x+10, y+50, x+20, y+5);
  line(x+20, y+5, x+30, y+50);
  line(x+30, y+50, x+40, y);
}

function printX(x, y){
  line(x, y, x+40, y+50);
  line(x+40, y, x, y+50);
}

function printY(x, y){
  line(x, y, x+20, y+25);
  line(x+20, y+25, x+40, y);
  line(x+20, y+25, x+20, y+50);
}

function printZ(x, y){
  line(x, y, x+40, y);
  line(x+40, y, x, y+50);
  line(x, y+50, x+40, y+50);
}

function draw() {
  background(220);
  printA(10, 50);
  printB(60, 50); 
  printC(110, 50);
  printD(160, 50);
  printE(210, 50);
  printF(260, 50);
  printG(310, 50);
  printH(10, 110);
  printI(60, 110);
  printJ(110, 110);
  printK(160, 110);
  printL(210, 110);
  printM(260, 110);
  printN(310, 110);
  printO(10, 170);
  printP(60, 170);
  printQ(110, 170);
  printR(160, 170);
  printS(210, 170);
  printT(260, 170);
  printU(310, 170);
  printV(10, 230);
  printW(60, 230);
  printX(110, 230);
  printY(160, 230);
  printZ(210, 230);
}
