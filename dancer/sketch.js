/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Cowboy(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Cowboy {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }

  display() {
    push();
    colorMode(RGB);
    translate(this.x, this.y);
    scale(2); // Doubles the size of everything
    noStroke();

    // Hat brim
    fill(90, 60, 30);
    push();
    let shake = map(sin(frameCount * 0.3), -1, 1, PI / 80, -PI / 80);
    rotate(shake);
    rect(-5, -35, 38, 6);

    // Hat top
    fill(100, 70, 40);
    rect(5, -45, 20, 10);

    // Head
    fill(230, 180, 140);
    rect(5, -30, 20, 20);
    fill(200, 150, 110);
    rect(5, -30, 20, 5);
    rect(5, -30, 8, 20);
    fill(150, 100, 50);
    rect(5, -30, 6, 8);
    pop();

    // Body (shirt)
    fill(180, 140, 100);
    rect(5, -10, 20, 30);

    // Arms
    push();
    translate(5, -10);
    let angle = map(sin(frameCount * 0.1), -1, 1, PI / 2 + PI / 10, PI / 2 - PI / 10);
    rotate(angle);
    fill(230, 180, 140);
    rect(0, 0, 5, 20);
    rect(-15, 15, 15, 5);
    pop();

    push();
    translate(23, -8);
    rotate(-angle);
    fill(230, 180, 140);
    rect(0, 0, 5, 20);
    rect(5, 15, 15, 5);
    pop();

    // Belt
    fill(50, 30, 10);
    rect(5, 10, 20, 5);

    // Belt buckle
    fill(200, 170, 50);
    rect(15, 10, 6, 5);

    // Vest
    fill(90, 50, 20);
    rect(3, -15, 10, 24);
    rect(22, -15, 5, 24);
    
    // Gun pocket
    rect(24,13,5,15);

    // Pants
    fill(50, 50, 80);
    rect(5, 15, 20, 10);
    push();
    translate(5, 22);
    let kick = -0.2 * PI + 0.2 * PI * sin(frameCount * 0.1);
    rotate(kick);
    rect(0, 0, 8, 22);
    pop();
    push();
    translate(17, 22);
    rotate(-kick - 0.5 * PI);
    rect(0, 0, 8, 20);
    pop();

    push();
    let x1 = 4.5 - sin(kick) * 18;
    let y1 = 19 + cos(kick) * 18;
    translate(x1, y1);
    rotate(-kick / 2);
    rect(0, 0, 8, 18);
    fill(40, 20, 10);
    rect(0, 18, 12, 5);
    pop();

    push();
    let x2 = 15 - sin(-kick - 0.5 * PI) * 18;
    let y2 = 18 + cos(-kick - 0.5 * PI) * 18;
    translate(x2, y2);
    rotate(kick / 2 + 0.25 * PI);
    rect(0, 0, 8, 18);
    fill(40, 20, 10);
    rect(0, 18, 12, 5);
    pop();

  }

  update() {
    this.x += sin(frameCount * 0.05);
    this.y += sin(frameCount * 0.1);
  }
}
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/
