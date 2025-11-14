class Troncos {
  constructor(posX, posY, ancho, velocidad) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.velocidad = velocidad;
  }
  
  dibujar() {
    push();
    fill(118, 65, 52);
    rect(this.posX, this.posY, this.ancho, 40);
    pop();
  }
  
  actualizar() {
    this.posX += this.velocidad;
    
    if(this.velocidad > 0 && this.posX > width) {
      this.posX = -this.ancho;     
    }
    
    if(this.velocidad < 0 && this.posX + this.ancho < 0) {
      this.posX = width;
    }
  }
}
