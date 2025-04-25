let Rock;
let Waves;
let tide = 1;
let Sea;
let Quill;
function setup() {
  createCanvas(800, 500);
  Rock = new rock();
  Waves = new waves();
  Sea = new sea();
  Sheet = new sheet();
  Quill = new quill();
}
function preload(){
  img1 = loadImage('rock.jpg');
  img2 = loadImage('waves.jpg');
  img3 = loadImage('surface.jpg');
  img4 = loadImage('sheet.jpg');
  img5 = loadImage('quill.jpg');
}
function draw() {
  background(220);
  Sea.display();
  Sea.update();
  Rock.display();
  Waves.display(); 
  Waves.update();
  Rock.smallRock();
  Sheet.display();
  Quill.display();
  
  fill('black')
  textFont('Courier New',45);
  textStyle(BOLD);
  text('The Ocean We Knew', 30, 220);
  fill('white');
  text('The Ocean We Knew', 28, 218);
  textSize(18);
  text('a message to the future',32,252);
  text('on the water we roam today',32,280);
  text('Garciel Pu',32,360);
  
  if (mouseIsPressed){
  console.log(mouseX,mouseY)}
}
////////////////////
class rock {
  display(){
    img1.loadPixels(); //very important
//image(img, 0, 0, width, height);
for (let x = 0; x < img1.width; x += 40) {
for (let y = 0; y < img1.height; y += 40) {
let i = (x + y*img1.width) * 4;
let r = (img1.pixels[i + 0]);
let g = (img1.pixels[i + 1])
let b = (img1.pixels[i + 2]);
noStroke();
fill(r-15,g-10,b);
  let br = (r + g+b)/3;
  if (br<240){
    rect(x/8, y/8-5,5,5);
  }
}
}
  }
  smallRock(){
    img1.loadPixels(); 
for (let x = 690; x < 960; x += 40) {
for (let y = 640; y < 880; y += 40) {
let i = (x + y*img1.width) * 4;
let r = (img1.pixels[i + 0]);
let g = (img1.pixels[i + 1])
let b = (img1.pixels[i + 2]);
noStroke();
fill(r-10,g-10,b-20);
  let br = (r + g+b)/3;
  if (br<240){
    rect(x/8, y/8-5,5,5);
  }
}
}
  }
}
////////////////////
class waves {
  
  display(){
  img2.loadPixels(); //very important
//image(img, 0, 0, width, height);
for (let x = 0; x < img2.width; x += 40) {
for (let y = 0; y < img2.height; y += 40) {
let i = (x + y*img2.width) * 4;
let r = (img2.pixels[i + 0]);
let g = (img2.pixels[i + 1])
let b = (img2.pixels[i + 2]);
noStroke();
fill(r+100,g+130,b+180,220);
  let br = (r + g+b)/3;
  if (br>60){
    let waveX = x/6+5
    let waveY = y/6+25
    rect(waveX*tide*tide, waveY*tide,6.7,6.7);
  }
}
}
  }
  update(){
  tide = 1 + sin(frameCount*0.07)*0.03
}
}
////////////////////
class sea {
  constructor(){
    this.x=0
    this.y=0
  }
  display(){
 img3.loadPixels(); //very important
//image(img, 0, 0, width, height);
for (let x = 0; x < img3.width; x += 6) {
for (let y = 0; y < img3.height; y += 6) {
let i = (x + y*img3.width) * 4;
let r = (img3.pixels[i + 0]);
let g = (img3.pixels[i + 1])
let b = (img3.pixels[i + 2]);
noStroke();
fill(r/4,g/1.3,b,180);  
rect(1.2*x+this.x,1.3*y+this.y,10,10);
}
}
  }
update(){
  this.x = 180*tide - 180
  this.y = 40*tide - 40
}
}
////////////////////
class sheet{
  display(){
    img4.loadPixels(); //very important
//image(img, 0, 0, width, height);
for (let x = 0; x < img4.width; x += 5) {
for (let y = 0; y < img4.height; y += 5) {
let i = (x + y*img4.width) * 4;
let r = (img4.pixels[i + 0]);
let g = (img4.pixels[i + 1]);
let b = (img4.pixels[i + 2]);
noStroke();
fill(r+50,g+40,b+40);
  let br = (r + g + b)/3;
  if (br<230){
    push()
    translate(550,-200);
    rotate(PI/10);
    rect(x, y ,6,6);
    fill('black');
    textFont('Georgia');
    text('Dear earth,',125,200);
    text('Today we shall be departed.' ,125,220,40)
  pop()}
}
}
  }
}
////////////////////
class quill{
   display(){
    img5.loadPixels(); //very important
//image(img, 0, 0, width, height);
for (let x = 0; x < img5.width; x += 12) {
for (let y = 0; y < img5.height; y += 12) {
let i = (x + y*img5.width) * 4;
let r = (img5.pixels[i + 0]);
let g = (img5.pixels[i + 1]);
let b = (img5.pixels[i + 2]);
noStroke();
fill(r+50,g+50,b+70);
  let br = (r + g + b)/3;
  if (br<230){
    push()
    translate(335,275)
    rotate(-PI/6)
    rect(x/4, y/4 ,3,3);
  pop()}
}
}
  }
}
