let fondos = [];
let pantalla = 0;
let tiempo = 0;

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet sem faucibus tortor luctus egestas varius ultricies ipsum. Sed sed mollis lectus. Etiam sem est, placerat sed viverra vel, lacinia sed massa. Sed laoreet eget ante ut tempus. Phasellus imperdiet sapien in orci malesuada ornare. Mauris condimentum nisi vitae dui consequat, sed tincidunt risus ultricies.";

let botonX;
let botonY;
let botonWidth;
let botonHeight;

let fade = 0;

function preload() {
  fondos[0] = loadImage("bg1.png");
  fondos[1] = loadImage("bg2.png");
}

function setup() {
  createCanvas(640, 480);
  botonX = width*0.5;
  botonY = height*0.75;
  botonWidth = 130;
  botonHeight = 80;
}


function draw() {
  if (pantalla === 0) {
    background(1, 0, 21);
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(botonX, botonY, botonWidth, botonHeight);
    fill(255);
    textSize(25);
    textAlign(CENTER, CENTER);
    text("INICIAR", botonX, botonY);
  } else if (pantalla === 1) {
    tiempo++;
    fade += 2;
    background(1, 0, 21);
    fill(255, 255, 255, fade);
    rect(width/2, height/2, 500, 350);
    fill(1, 0, 21, fade);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(loremIpsum, 320, 200, 450, 400);
    
    if (tiempo >= 270) {
      pantalla = 2;
      fade = 255;
    }
    
  } else if (pantalla === 2) {
    image(fondos[0], 0, 0, 640, 480);
    fill(1, 0, 21, fade);
    rectMode(CORNER);
    rect(0, 0, width, height);
    fade -= 2;
  }
}

function mouseClicked() {
  if (mouseX > botonX && mouseX < botonX + botonWidth && mouseY > botonY && mouseY < botonY + botonHeight) {
    pantalla = 1;
  }
}
