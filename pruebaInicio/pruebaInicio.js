let pantalla = 0;
let fondos = [];

let botonWidth = 150;
let botonHeight = 40;

let transparencia = 0;
let fadeIn = true;
let texto = "Todo es oscuridad. Por más que Yanay quiere abrir sus ojos, algo no se lo permite. Lo unico que siente es una leve brisa mientras se deja caer. Todo es oscuridad, hasta que la niña siente tierra humeda bajo sus pies. Yanay abre sus ojos y...";
let textoVisible = "";
let tipeoIndex = 0;
let tipeoVel = 6;
let frames = 0;
let tipeoIniciar = false;

function preload() {
  fondos[0] = loadImage("bg1.png");
  fondos[1] = loadImage("bg2.png");
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  let textX = width / 2;

  if (pantalla === 0) {
    background(220, 220, 220);
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Aventura de Yanay", textX, height / 2 - 80);
    textSize(20);
    text("Haz clic para comenzar", textX, height / 2);
    botonUnico("Comenzar Aventura");
  } else if (pantalla ===1) {
    background(0);
    textAlign(CENTER, TOP);
    textSize(25);
    fill(255, transparencia);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 600, 440);

    if (fadeIn) {
      transparencia += 3;
      if (transparencia >= 255) {
        transparencia = 255;
        fadeIn = false;
        tipeoIniciar = true;
      }
    }

    if (tipeoIniciar) {
      frames++;
      if (frames % tipeoVel === 0 && tipeoIndex < texto.length) {
        textoVisible += texto.charAt(tipeoIndex);
        tipeoIndex++;
      }

      fill(0);
      text(textoVisible, width/2, height*0.25, 400);
    }

    if (tipeoIndex === texto.length) {
      transparencia -= 1.5;

      if (transparencia === 0) {
        pantalla = 2;
      }
    }
  } else if (pantalla === 2) {
    transparencia = 255;
    image(fondos[0], 0, 0, 640, 480);
  }
}


function botonUnico(botonText) {
  fill(150, 150, 255);
  rect(width / 2 - botonWidth / 2, height - 60, botonWidth, botonHeight);
  fill(0);
  textSize(16);
  text(botonText, width / 2, height - 40);
}

function cambiarPantalla(destino) {
  pantalla = destino;
}

function checkNavBoton(botonX, destino) {
  let botonY = height - 60;
  if (mouseX >= botonX && mouseX <= botonX + botonWidth &&
    mouseY >= botonY && mouseY <= botonY + botonHeight) {
    cambiarPantalla(destino);
    return true;
  }
  return false;
}

function checkBotonUnico(destino) {
  let botonX = width / 2 - botonWidth / 2;
  return checkNavBoton(botonX, destino);
}

function mousePressed() {
  if (pantalla === 0) {
    checkBotonUnico(1);
  }
}
