let juego;
let rioInicio = 40;
let rioFinal = 400;

function setup() {
  createCanvas(640, 480);
  juego = new Juego;
}

function draw() {
  juego.actualizar();
}

function mousePressed() {
  juego.press();
}

function keyPressed() {
  juego.teclaPresionada(keyCode);
}
