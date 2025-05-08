let Rock;
let fishnum = 0;
let Waves;
let tide = 1;
let Sea;
let Quill;
let stage = 0;
let FishList = [];
function setup() {
  createCanvas(800, 500);
  Rock = new rock();
  Waves = new waves();
  Sea = new sea();
  Sheet = new sheet();
  Quill = new quill();
}
function preload() {
  img1 = loadImage("rock.jpg");
  img2 = loadImage("waves.jpg");
  img3 = loadImage("surface.jpg");
  img4 = loadImage("sheet.jpg");
  img5 = loadImage("quill.jpg");
}
function draw() {
  background(220);
  Sea.display();
  for (let i = 0; i < FishList.length; i++) {
    FishList[i].display();
    }
  Rock.display();
  Waves.display();
  Waves.update();
  Rock.smallRock();

  if (stage == 0) {
    Sea.update();
    for (let i = 0; i < FishList.length; i++) {
    FishList[i].update();
    }
    fill(" white");
    textFont("Courier New", 45);
    textStyle(BOLD);
    textSize(18);
    text("Click to show the text", 30, 420);
    text("press F to create and D to discard ", 30,440);
    textSize(18);
  }

  if (stage == 1) {
    Sheet.display();
    Quill.display();
    text("Click to hide the text", 20, 450);
    
  }
}
////////////////////
class rock {
  display() {
    img1.loadPixels(); //very important
    //image(img, 0, 0, width, height);
    for (let x = 0; x < img1.width; x += 40) {
      for (let y = 0; y < img1.height; y += 40) {
        let i = (x + y * img1.width) * 4;
        let r = img1.pixels[i + 0];
        let g = img1.pixels[i + 1];
        let b = img1.pixels[i + 2];
        noStroke();
        fill(r - 15, g - 10, b);
        let br = (r + g + b) / 3;
        if (br < 240) {
          rect(x / 8, y / 8 - 5, 5, 5);
        }
      }
    }
  }
  smallRock() {
    img1.loadPixels();
    for (let x = 690; x < 960; x += 40) {
      for (let y = 640; y < 880; y += 40) {
        let i = (x + y * img1.width) * 4;
        let r = img1.pixels[i + 0];
        let g = img1.pixels[i + 1];
        let b = img1.pixels[i + 2];
        noStroke();
        fill(r - 10, g - 10, b - 20);
        let br = (r + g + b) / 3;
        if (br < 240) {
          rect(x / 8, y / 8 - 5, 5, 5);
        }
      }
    }
  }
}
////////////////////
class waves {
  display() {
    img2.loadPixels(); //very important
    //image(img, 0, 0, width, height);
    for (let x = 0; x < img2.width; x += 40) {
      for (let y = 0; y < img2.height; y += 40) {
        let i = (x + y * img2.width) * 4;
        let r = img2.pixels[i + 0];
        let g = img2.pixels[i + 1];
        let b = img2.pixels[i + 2];
        noStroke();
        fill(r + 100, g + 130, b + 180, 200);
        let br = (r + g + b) / 3;
        if (br > 60) {
          let waveX = x / 6 + 5;
          let waveY = y / 6 + 25;
          rect(waveX * tide * tide, waveY * tide, 6.7, 6.7);
        }
      }
    }
  }
  update() {
    tide = 1 + sin(frameCount * 0.05) * 0.03;
  }
}
////////////////////
class sea {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  display() {
    img3.loadPixels(); //very important
    //image(img, 0, 0, width, height);
    for (let x = 0; x < img3.width; x += 6) {
      for (let y = 0; y < img3.height; y += 6) {
        let i = (x + y * img3.width) * 4;
        let r = img3.pixels[i + 0];
        let g = img3.pixels[i + 1];
        let b = img3.pixels[i + 2];
        noStroke();
        fill(r / 4, g / 1.3, b, 180);
        rect(1.32 * x + this.x, 1.3 * y + this.y, 10, 10);
      }
    }
  }
  update() {
    this.x = 180 * tide - 180;
    this.y = 40 * tide - 40;
  }
}
////////////////////
class sheet {
  display() {
    img4.loadPixels(); //very important
    //image(img, 0, 0, width, height);
    for (let x = 0; x < img4.width; x += 5) {
      for (let y = 0; y < img4.height; y += 5) {
        let i = (x + y * img4.width) * 4;
        let r = img4.pixels[i + 0];
        let g = img4.pixels[i + 1];
        let b = img4.pixels[i + 2];
        noStroke();
        fill(r + 50, g + 40, b + 40);
        let br = (r + g + b) / 3;
        if (br < 230) {
          push();
          translate(550, -200);
          rotate(PI / 10);
          rect(x, y, 6, 6);

          pop();
        }
      }
    }
      push();
      translate(550, -200);
      rotate(PI / 10);
      if (fishnum == 0) {
        fill("black");
        textFont("Georgia");
        textSize(12);
        text("", 125, 200);
        text(
          "In poetry and books, the sea is vibrant—abundant, teeming with life, a place where countless sails set forth. It is the birthplace of life itself.",
          125,
          235,
          200
        );
        text(
          "But now you don’t see life. Pollution, overfishing, warming, acidification… I can’t name all the reasons. I only know we’ve let it down.",
          125,
          320,
          250
        );
        text(
          "I won’t live to see the sea a thousand years from now. The past can be recalled with evidence, but the future is a mere illusion. Maybe when you return, you’ll witness a billion new forms of life--because life always finds a way. And you’ll still have countless poems to write.",
          125,
          390,
          250
        );
        text("Don't mourn the empty sea.", 125, 530, 300);

        pop();
      } 
      else if (fishnum <= 3) {
        fill("black");
        textFont("Georgia");
        textSize(12);
        text("", 125, 200);
        text(
          "There are still some fish left in the sea. In waters laced with diesel and sunscreen, silver spines draw arcs through the waves.",
          125,
          200,
          200
        );
        text(
          "The role of fishermen have long disappeared. If you want to know how they lived, read Hemingway. We rely on books now, too; history for history is still history.",
          125,
          280,
          250
        );
        text(
          "A dozen years ago, children used to try fishing with a rod at dusk. Fishing was a sort of urban legend for them. They didn’t know their sinkers were dropping deeper than those dried bones of coral. When they heard adults talk about fish, they were curious what they looked like.",
          125,
          370,
          250
        );
        text(
          "As I write this, I hear water stirring. I can’t say if this hope is real, or if I’m just longing too much for the image of having fish gliding past my boat hull.",
          125,
          510,
          300
        );

        pop();
      } 
      else if (fishnum <= 6) {
        fill("black");
        textFont("Georgia");
        textSize(12);
        text("", 125, 200);
        text(
          "I like rowing near the shore to watch fish and do nothing else. If there’s good weather and good luck, you might spot a school like this, casting a scatter of tiny shadows around your boat.",
          125,
          220,
          200
        );
        text(
          "Last summer, there was always a boy on the breakwater, practicing his cast. He’s never caught a fish—his line lands too close to shore. The sinker strikes the sand, where bits of coral bones lies like crushed stars.",
          125,
          340,
          250
        );
        text(
          "When the tide recedes, the beach is littered with broken shells. Each crack is a poem holding a half-finished sentence, but if you reach out and pick one up, it sings with its jagged edge: The waves here were once briny, salty, alive.",
          125,
          440,
          250
        );

        pop();
      } 
      else if (fishnum <= 8) {
        fill("black");
        textFont("Georgia");
        textSize(12);
        text("", 125, 200);
        text(
          "The silver shadows grow denser each year. When sunlight cuts across the breakwater, you can see them stitching fine dotted lines beneath the surface.",
          125,
          200,
          200
        );
        text(
          "I don’t believe the sea will ever truly die. We’re just the ones who must leave, leaving this blue moor to flourish on its own.",
          125,
          280,
          250
        );
        text(
          "When the tide pulls back past the third rock, I see a shimmer of shadows trembling in a hollow of the reef. Twenty, thirty fish? Maybe forty or fifty? It doesn’t matter. What matters is the path they swim, mending the scars of nuclear war from decades past, stitching them into slow-healing wounds.",
          125,
          350,
          250
        );
        text(
          "Over the eastern cape, a flock of birds circles. When they dive, the surface erupts in silver spray. We no longer ride fishing boats—today’s vessels soar only into the sky—but the dock still stands. At night, you can hear the waves humming the chorus of old fishing songs under the moonlight.",
          125,
          490,
          300
        );

        pop();
      } 
      else if (fishnum > 8) {
        fill("black");
        textFont("Georgia");
        textSize(12);
        text("", 125, 200);
        text(
          "Since the human evacuation was announced, the sea has seemed to celebrate its second birthday. Fish, once scarce, is now wandering and circling beneath the surface, vibrant once more.",
          125,
          200,
          200
        );
        text(
          "Before leaving, a group of students gathered on the beach, tossing crumbs of bread into the sea. One time a shadow actually did shot out like an arrow, grabbed a scrap, and sent a splash on the trousers of the boy kneeling closest to the water.",
          125,
          325,
          250
        );
        text(
          "Most noticeably, the tide sounds different now. It used to retreat like the tearing of old cloth. Now it crackles softly. At night, if you shine a flashlight into the the cracks in the reef, you’ll often see delicate flashes darting away.",
          125,
          450,
          250
        );
        text("As we part ways— may they thrive.", 125, 550, 300);

        pop();
      }
    }
}
////////////////////
class quill {
  display() {
    img5.loadPixels(); //very important
    //image(img, 0, 0, width, height);
    for (let x = 0; x < img5.width; x += 12) {
      for (let y = 0; y < img5.height; y += 12) {
        let i = (x + y * img5.width) * 4;
        let r = img5.pixels[i + 0];
        let g = img5.pixels[i + 1];
        let b = img5.pixels[i + 2];
        noStroke();
        fill(r + 50, g + 50, b + 70);
        let br = (r + g + b) / 3;
        if (br < 230) {
          push();
          translate(335, 275);
          rotate(-PI / 6);
          rect(x / 4, y / 4, 3, 3);
          pop();
        }
      }
    }
  }
}
////////////////////
class fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(15,40);
    this.angle = random(TWO_PI);
    this.tailAngle = 0;
    this.tailSpeed = 0.02;
    this.tailTime = random(TWO_PI);
  }

  update() {
    this.x += cos(this.angle) * 1.5;
    this.y += sin(this.angle) * 1.5;

    if (this.x < -50) this.x = width + 50;
    if (this.x > width + 50) this.x = -50;
    if (this.y < -50) this.y = height + 50;
    if (this.y > height + 50) this.y = -50;

    this.tailTime += this.tailSpeed;
    this.tailAngle = sin(this.tailTime) * 0.2;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(0, 80);

    // 尾巴 + 身体 (整体一条曲线)
    beginShape();
    curveVertex(-this.size * 1.5, -this.size * 0.3+ sin(this.tailTime) * -16); // 左上尾
    curveVertex(-this.size * 1.5, -this.size * 0.3+ sin(this.tailTime) * -16); // 控制点重复
    curveVertex(-this.size * 0.7, -this.size * 0.1 + sin(this.tailTime) * -4); // 尾-身过渡
    curveVertex(this.size * 0.7, -this.size * 0.4);  // 身体前上
    curveVertex(this.size * 1.2, 0);                // 鱼头
    curveVertex(this.size * 0.7, this.size * 0.4);   // 身体前下
    curveVertex(-this.size * 0.7, this.size * 0.1 + sin(this.tailTime) * -4); // 尾-身下
    curveVertex(-this.size * 1.5, this.size * 0.2+ sin(this.tailTime) * -16);  // 左下尾
    curveVertex(-this.size * 1.5, this.size * 0.2+ sin(this.tailTime) * -16);  // 控制点重复
    endShape(CLOSE);

    // 鳍（可选）
    fill(0, 80);
    triangle(-this.size * 0.2, -this.size * 0.3, -this.size * 0.3, -this.size * 0.8, this.size * 0.1, -this.size * 0.3);
    triangle(-this.size * 0.2, this.size * 0.3, -this.size * 0.3, this.size * 0.8, this.size * 0.1, this.size * 0.3);

    pop();
  }
}




function keyPressed() {
  if (key === "F" || key === "f") {
    fishnum++;
    FishList.push(new fish(random(0,400),random(height)));
  } else if ((key === "D" || key === "d") && fishnum > 0) {
    fishnum--;
    let indexToRemove = floor(random(FishList.length));
    FishList.splice(indexToRemove, 1);
  }
}


function mousePressed() {
  if (mouseX < 600) {
    stage += 1;
    if (stage == 2) {
      stage -= 2;
    }
  }
}
