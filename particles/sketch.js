let Stars = [];
let cloud = [];
let bgb = 100;
let bgs = 40;
function setup() {
  createCanvas(500, 500);
  colorMode(HSB)
}

function draw() {
  background(200,bgs,bgb);
  for (let i=0; i<Stars.length; i++){
    Stars[i].display();
    Stars[i].update();
  }
  
for (let i = 0; i < cloud.length; i++) {
cloud[i].display();
cloud[i].update();
}
if(mouseIsPressed){
  cloud = []
}
  else{for (let i = cloud.length - 1; i >= 0; i--) {
if (cloud[i].isGone == true) {
cloud.splice(i, 1);
}}
}
  
  if (mouseIsPressed){
    push()
    for (let i=0; i<=5; i++){
      Stars.push(new Star(0,0));
    }
    bgs = lerp(bgs,80,0.1);
    bgb = lerp(bgb,0,0.04);
    pop()
}
  else{
    bgs = lerp(bgs,40,0.04);
    bgb = lerp(bgb,100,0.04);
    let sec = frameCount%130
    if (sec == 1){cloud.push(new Cloud(0,random(0+80,height-80)))}
  }
  for (let i = Stars.length-1; i>=0; i--){
    if (Stars[i].out){
      Stars.splice(i,1);
        }
  }
}

//
class Cloud {
  constructor(startX, startY) {
this.x = startX;
this.y0 = startY;
this.y = 0;
this.s = random(50, 100);
this.speedX = map(this.s, 50, 100, 2, 0.5);
this.isGone = false;
  }
  display() {
push();
colorMode(HSB);
translate(this.x, this.y);
fill(200, 10, 100,5);
noStroke();
circle(0, 0, this.s);
for (let angle = 0; angle < 2 * PI; angle += PI / 5) {
push();
rotate(angle);
let s2 = map(noise(angle * this.s), 0, 1, this.s * 0.1, this.s);
circle(this.s * 0.5, 0, s2);
pop();
}
pop();
}
  update() {
this.x = this.x + this.speedX;
this.y = this.y0 + 100 * sin(noise(frameCount * 0.01));
if (this.x > width * 1.1) {
this.isGone = true;
}
  }
}

class Star {
  constructor(x,y){
    this.x = random(mouseX-50,mouseX+50);
    this.y = 0;
    this.out = false;
    this.speed = random(5,8);
    let rank = random(1,40);
    if (rank<1.35){
      this.size = random (6,12)
    }
    else{
    this.size = random (0.8,2.5)}
  }
  display(){
    push();
  translate(this.x, this.y);
  fill(50,50,100);
  noStroke();
  beginShape();
  for (let i = 0; i < 4; i++) {
    let angle = TWO_PI * i / 4;
    let outerX = cos(angle) * this.size*1.6;
    let outerY = sin(angle) * this.size*2.2;
    vertex(outerX, outerY);

    let midAngle = angle + PI / 4;
    let innerX = cos(midAngle) * this.size*0.8;
    let innerY = sin(midAngle) * this.size;
    vertex(innerX, innerY);
  }
  endShape(CLOSE);
  pop()
    
  }
  update(){
    this.y = this.y+this.speed;
    if (this.y > height){
      this.out = true
    }
  }
}
