function setup() {
  createCanvas(400, 600);
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
  
  //this
  printT(5,10);
  printH(55, 10);
  printI(105,10);
  printS(155, 10);
  //homework
  printH(5, 70);
  printO(55, 70);
  printM(105, 70);
  printE(155, 70);
  printW(205, 70);
  printO(255, 70);
  printR(305, 70);
  printK(355, 70);
  //remind 
  printR(5, 130);
  printE(55, 130);
  printM(105, 130);
  printI(155, 130);
  printN(205, 130);
  printD(255, 130);
  //me
  printM(5, 190);
  printE(55, 190);
  //the
  printT(5, 250);
  printH(55, 250);
  printE(105, 250);
  //order
  printO(5, 310);
  printR(55, 310);
  printD(105, 310);
  printE(155, 310);
  printR(205, 310);
  //from
  printF(5, 370);
  printR(55, 370);
  printO(105, 370);
  printM(155, 370);
  //A to Z
  printA(5, 430);
  printT(105, 430);
  printO(155, 430);
  printZ(255, 430);
  
  
  
  
  
}
