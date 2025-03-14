/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let v;
let h, s, b;
let x, y;
let stage;
let a;
let balls = [];
let spectre = 0;
let circleY = 0;
let vx,vy;

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
    colorMode(HSB);
    ellipseMode(CENTER);
    h = 225;
    s = 0;
    b = 100;
    stage = 0;
    x = width / 2;
    y = x;
    v = 0.15;
    a = 0;
}

function draw() {
    for (let i = 0; i < 500; i += 20) {
      strokeColor = map(y,0,500,0,360)-275+i
      stroke(strokeColor, 50, 60, 0.3);
      noFill();
      bezier(
        100 * noise(frameCount * 0.005) - i,
        100 * noise(frameCount * 0.005) + 2 * i,
        400 + 200 * noise(frameCount * 0.005),
        100 * noise(frameCount * 0.005),
        550 + 200 * noise(frameCount * 0.005),
        200 + 200 * noise(frameCount * 0.005),
        700 + 500 * noise(frameCount * 0.005) - i / 3,
        100 + 200 * noise(frameCount * 0.005) + i 
      );
    }
  
    for (let i = 0; i < height; i += 20) {
      noStroke();
      fill(map(i, 0, 500, 0, 360), 100, 100);
      rect(0, i, 60, 20);
      triangle(60, i, 60, i + 20, 70, i + 10);
    }
  
    for (let i = 0; i < balls.length; i++) {
      fill(balls[i].color, 100, 100);
      ellipse(balls[i].x, balls[i].y, 30);
      balls[i].x += 1;
      let d = dist(balls[i].x, balls[i].y, x, y);
      if (d < 30) {
        h = balls[i].color;
        s = 100;
      if (balls[i].x > width) {
        balls.splice(i, 1);
        i--;
      }
      }
    }
  
    if (stage == 0) {
      background(190, 80, 25, 0.2);
      fill(190, 30, 80);
      textSize(40);
      text("1", 750, 50);
      fill(190,30,80,0.1);
      rect(736,10,50,50,20);
      stroke(h, s, b);
      noFill();
      
      
    let shapeSize = width / 10;
    let num = 16; // Number of vertices in the shape
  
    push();
    translate(x, y + 40 * sin(frameCount / 12)); // Move shape to correct position
  
    beginShape();
    for (let i = 0; i < num; i++) {
      let angle = TWO_PI * (i / num);
      let radius = shapeSize * 0.5 + noise(frameCount * 0.03 + i) * shapeSize * 0.3
      let vx = cos(angle) * radius;
      let vy = sin(angle) * radius;
      curveVertex(vx, vy);
    }
    endShape(CLOSE);
    pop();
  
    if (mouseIsPressed && mouseX >= 70) {
      x = lerp(x, mouseX, 0.05);
      y = lerp(y, mouseY, 0.05);
      s = abs(mouseX - x) / 2 + abs(mouseY - y) / 2;
    } else {
      s = lerp(s, 0, 0.05);
    }
    }
  
  
    if (stage == 1) {
    background(100, 50, 50, 0.2);
    fill(100, 50, 200);
    textSize(40);
    text("2", 750, 50);
    fill(100,50,100,0.1);
    rect(736,10,50,50,20);
      
    stroke(h, s, b);
    noFill();
  
    let shapeSize = width / 10;
    let num = 8; // Number of vertices in the shape
  
    push();
    translate(x, y + 40 * sin(frameCount / 12)); // Move shape to correct position
  
    beginShape();
    for (let i = 0; i < num; i++) {
      let angle = TWO_PI * (i / num);
      let radius = shapeSize * 0.5 + noise(frameCount * 0.02 + i) * shapeSize * 0.5;
      let vx = cos(angle) * radius;
      let vy = sin(angle) * radius;
      vertex(vx, vy);
    }
    endShape(CLOSE);
    pop();
  
    if (mouseIsPressed && mouseX >= 70) {
      x = lerp(x, mouseX, 0.05);
      y = lerp(y, mouseY, 0.05);
      s = abs(mouseX - x) / 2 + abs(mouseY - y) / 2;
    } else {
      s = lerp(s, 0, 0.05);
    }
  }
  }

