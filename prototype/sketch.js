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
