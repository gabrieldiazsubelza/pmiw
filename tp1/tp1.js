//Diaz Subelza Gabriel
//tp1 comisión 3
//enlace al video explicatorio: https://youtu.be/DM81XB8lMf0

let centroX = 600;
let centroY = 200;
let modoC = false;
let modoM = false;
let modoY = false;

function preload() {
  ref = loadImage("D_5.jpeg");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  if (modoC){
    background(173, 232, 244);
  } else if (modoM){
    background(255, 179, 193);
  } else if (modoY){
    background(252, 239, 180);
  } else {
    background(36, 181, 116);
  }
  let cantCapas = 8;
  let cantCirculos = 16;
  let radioMax = 220;

  for (let r = 0; r < cantCapas; r++) {
    let escalado = 1.19 - r / cantCapas;
    let radio = radioMax * escalado;
    let tam = 40 * escalado;
    let giro = 0;

    if (mouseIsPressed && r%2 === 0) {
      giro = frameCount * 0.02;
    } else if (r%2 === 0) {
      giro = PI / cantCirculos;
    }

    for (let i = 0; i < cantCirculos; i++) {
      let angulo = TWO_PI / cantCirculos * i + giro;
      let x = centroX + cos(angulo)*radio;
      let y = centroY + sin(angulo)*radio;
      let rotacion = radians(22.5 * i);

      push();
      translate(x, y);
      rotate(rotacion);
      circulo(0, 0, tam);
      pop();
    }
    image(ref, 0, 0, 400, 400);
    fill(0);
    stroke(15);
    line(400, 0, 400, 400);
  }
}

function colorRandom (opacidad) {
  return color(random(255), random(255), random(255), opacidad);
}

function circulo (x, y, tam) {
  noStroke();
  if (keyIsPressed && key === "r") {
    fill(colorRandom(200));
  } else if (modoC) {
    fill(237, 242, 251);
  } else if (modoM) {
    fill(255, 224, 233);
  } else if (modoY) {
    fill(255, 250, 229);
  } else {
    fill(255);
  }
  arc(x, y, tam + 4, tam + 6, PI, TWO_PI);
  if (keyIsPressed && key === "r") {
    fill(colorRandom(200));
  } else if (modoC) {
    fill(0, 24, 69);
  } else if (modoM) {
    fill(89, 13, 34);
  } else if (modoY) {
    fill(137, 51, 2);
  } else {
    fill(0);
  }
  arc(x, y, tam + 4, tam + 6, TWO_PI, PI + TWO_PI);
  if (keyIsPressed && key === "r") {
    fill(colorRandom(200));
  } else if (modoC) {
    fill(5, 102, 141);
  } else if (modoM) {
    fill(216, 17, 89);
  } else if (modoY) {
    fill(255, 123, 0);
  } else {
    fill(102, 47, 148);
  }
  ellipse(x, y, tam, tam);
}

function keyPressed() {
  if (key === "c" || key === "C") {
    modoC = !modoC;
  }
  if (key === "m" || key === "M") {
    modoM = !modoM;
  }
  if (key === "y" || key === "Y") {
    modoY = !modoY;
  }
}
