import { Component } from "@angular/core";

@Component({
  selector : 'app-heroe',
  templateUrl : './heroe.component.html'
})

export class Heroe {
  poder : string = "supervelocidad"
  sobrenombre : string = "cacacaman"

  get nombreCapitalizado(){
    return this.sobrenombre.toUpperCase();
  }

  obtenerNombre(): string {
    return ` ${this.sobrenombre} y su poder es ${this.poder}`;
  }

  cambiarNombre(): void {
    this.sobrenombre = "Spillleman";
  }
}
