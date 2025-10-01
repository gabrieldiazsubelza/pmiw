//Pantalla de estado
let pantalla = 0; // 0: Inicio, 1-5: Navegación principal, 6: Créditos
let pantallaAnterior = 0; // Se mantiene la variable, aunque no se usa para la función de 'regresar'

//Configuración de botones
let buttonWidth = 150;
let buttonHeight = 40;

function setup() {
createCanvas(640, 480);
textAlign(CENTER, CENTER); // Alineación del texto al centro
rectMode(CORNER); // Asegurarse de que rects se dibujen desde la esquina superior izquierda
}

//Función para dibujar los botones de navegación principal (Pantallas 1 a 4)
function dibujarBotonesNavegacion(btn1Text, btn2Text) {
let bottomY = height - 60;

//Este seria el boton izquierdo
fill(150, 150, 255);
let btn1X = width / 2 - buttonWidth - 10;
rect(btn1X, bottomY, buttonWidth, buttonHeight);
fill(0);
textSize(16);
text(btn1Text, btn1X + buttonWidth / 2, bottomY + buttonHeight / 2);

//Y este seria boton derecho
fill(150, 150, 255);
let btn2X = width / 2 + 10;
rect(btn2X, bottomY, buttonWidth, buttonHeight);
fill(0);
textSize(16);
text(btn2Text, btn2X + buttonWidth / 2, bottomY + buttonHeight / 2);
}

function dibujarBotonInicio() {
fill(150, 150, 255);
rect(width / 2 - buttonWidth / 2, height - 60, buttonWidth, buttonHeight);
fill(0);
textSize(16);
text("Volver al Inicio", width / 2, height - 40);
}


function draw() {

if (pantalla === 0) {
//Pantalla de Inicio 
background(220, 220, 220);
fill(0);
textSize(24);
text("Pantalla de Inicio\nHaz clic para comenzar", width / 2, height / 2 - 50);

//Botón para ir a Pantalla 1
fill(150, 150, 255);
rect(width / 2 - buttonWidth / 2, height - 60, buttonWidth, buttonHeight);
fill(0);
textSize(16);
text("Ir a Pantalla 1", width / 2, height - 40);

} else if (pantalla === 1) {
//Pantalla 1
background(200, 220, 255);
fill(0);
textSize(24);
text("Bienvenido a la Pantalla 1", width / 2, height / 2);
dibujarBotonesNavegacion("Ir a Pantalla 2", "Ir a Pantalla 5");

} else if (pantalla === 2) {
//Pantalla 2
background(255, 200, 200);
fill(0);
textSize(24);
text("Esta es la Pantalla 2", width / 2, height / 2);
dibujarBotonesNavegacion("Ir a Pantalla 1", "Ir a Pantalla 3");

} else if (pantalla === 3) {
//Pantalla 3
background(200, 255, 200);
fill(0);
textSize(24);
text("Esta es la Pantalla 3", width / 2, height / 2);
dibujarBotonesNavegacion("Ir a Pantalla 2", "Ir a Pantalla 4");

} else if (pantalla === 4) {
// Pantalla 4
background(255, 255, 200);
fill(0);
textSize(24);
text("Esta es la Pantalla 4", width / 2, height / 2);
dibujarBotonesNavegacion("Ir a Pantalla 3", "Ir a Pantalla 5");

} else if (pantalla === 5) {
// Pantalla 5 (Botón ÚNICO: Volver al Inicio)
background(200, 200, 255);
fill(0);
textSize(24);
text("Esta es la Pantalla 5", width / 2, height / 2);
dibujarBotonInicio();

} else if (pantalla === 6) {
//Creditos
background(255, 220, 200);
fill(0);
textSize(30);
text("¡Créditos!", width / 2, 80);
textSize(20);
text("Aplicación de Navegación Simple\nProgramada en p5.js\n\n© 2025", width / 2, height / 2);

dibujarBotonInicio();
}
}


function cambiarPantalla(dest) {
//No se necesita guardar pantallaAnterior si el botón de regreso no existe
    pantalla = dest;
}

function checkNavButton(btnX, dest) {
let bottomY = height - 60;
if (mouseX >= btnX && mouseX <= btnX + buttonWidth &&
mouseY >= bottomY && mouseY <= bottomY + buttonHeight) {
cambiarPantalla(dest);
return true;
}
return false;
}

function mousePressed() {
let bottomY = height - 60; 



if (pantalla === 0) {
//Botón de la pantalla de inicio (Ir a Pantalla 1)
let btnX = width / 2 - buttonWidth / 2;
checkNavButton(btnX, 1);

} else if (pantalla === 1) {
//Botón izquierdo (Ir a Pantalla 2)
let btn1X = width / 2 - buttonWidth - 10;
if (checkNavButton(btn1X, 2)) return;
//Botón derecho (Ir a Pantalla 5)
let btn2X = width / 2 + 10;
checkNavButton(btn2X, 5);

} else if (pantalla === 2) {
// Botón izquierdo (Ir a Pantalla 1)
let btn1X = width / 2 - buttonWidth - 10;
if (checkNavButton(btn1X, 1)) return;
// Botón derecho (Ir a Pantalla 3)
let btn2X = width / 2 + 10;
checkNavButton(btn2X, 3);

} else if (pantalla === 3) {
//Botón izquierdo (Ir a Pantalla 2)
let btn1X = width / 2 - buttonWidth - 10;
if (checkNavButton(btn1X, 2)) return;
//Botón derecho (Ir a Pantalla 4)
let btn2X = width / 2 + 10;
checkNavButton(btn2X, 4);

} else if (pantalla === 4) {
// Botón izquierdo (Ir a Pantalla 3)
let btn1X = width / 2 - buttonWidth - 10;
if (checkNavButton(btn1X, 3)) return;
//Botón derecho (Ir a Pantalla 5)
let btn2X = width / 2 + 10;
checkNavButton(btn2X, 5);

} else if (pantalla === 5 || pantalla === 6) {

let btnX = width / 2 - buttonWidth / 2;
checkNavButton(btnX, 0);
}
}
