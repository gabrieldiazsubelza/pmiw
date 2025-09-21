let caminataDER = [];
let caminataIZQ = [];
let yanayX;
let yanayY;
let dirX = 0;
let dirY = 0;

function preload() {
  caminataDER[0] = loadImage("YANAY_quietaDER.png");
  caminataDER[1] = loadImage("YANAY_wc1DER.png");
  caminataDER[2] = loadImage("YANAY_wc2DER.png");
  caminataIZQ[0] = loadImage("YANAY_quietaIZQ.png");
  caminataIZQ[1] = loadImage("YANAY_wc1IZQ.png");
  caminataIZQ[2] = loadImage("YANAY_wc2IZQ.png");
}

function setup() {
  createCanvas(900, 600);
  yanayX = 800/2;
  yanayY = 400/2;

  frameRate(15);
}

function draw() {
  background(0, 255, 0);

  if (keyIsPressed) {
    if (key === "ArrowRight") {
      image(caminataDER[frameCount % caminataDER.length], dirX + yanayX, dirY + yanayY, 300, 300);
      dirX += 5;
    }
    if (key === "ArrowLeft") {
      image(caminataIZQ[frameCount % caminataIZQ.length], dirX + yanayX, dirY + yanayY, 300, 300);
      dirX -= 5;
    }
  } else {
    if (dirX > yanayX) {
      image(caminataDER[0], dirX + yanayX, dirY + yanayY, 300, 300);
    } else if (dirX < yanayX) {
      image(caminataIZQ[0], dirX + yanayX, dirY + yanayY, 300, 300);
    }
  }
}
