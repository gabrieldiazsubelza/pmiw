class Juego {
  constructor() {
    this.personaje = new Personaje;
    this.troncos = [];
    this.estado = 0;
  }

  actualizar() {
    if (this.estado == 0) {
      this.dibujarPantallaInicio();
    } else if (this.estado == 1) {
      background(0, 255, 0);
      fill(26, 200, 237);
      rect(0, rioInicio, 640, 320);

      let personajeSobreTronco = false;

      for (let t of this.troncos) {
        t.actualizar();
        t.dibujar();

        if (this.personaje.encimaDe(t)) {
          personajeSobreTronco = true;
          this.personaje.moverConTronco(t);
        }
      }

      this.personaje.actualizar();

      if (this.personaje.estaEnElAgua() && !personajeSobreTronco) {
        this.perder();
      }
    }
  }

  iniciarJuego() {
    this.estado = 1;
    let carriles = 8;
    let carrilesTam = 40;

    for (let i = 0; i < 12; i++) {
      let carril = i % carriles;
      let y = rioInicio + carril * carrilesTam + (carrilesTam - 40) / 2;
      let ancho = random(80, 160);
      let velocidad = 2;

      if (i % 2 == 1) {
        velocidad *= -1;
      }

      this.troncos.push(new Troncos(random(width), y, ancho, velocidad));
    }
  }

  perder() {
    this.estado = 0;
    this.personaje = new Personaje();
    this.troncos = [];
  }

  press() {
    if (this.estado === 0) {
      this.iniciarJuego();
    }
  }

  dibujarPantallaInicio() {
    background(0, 200, 0);
    fill(255);
    textAlign(CENTER, CENTER);
    text( "CLIC PARA EMPEZAR", width*0.5, height*0.5 );
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
