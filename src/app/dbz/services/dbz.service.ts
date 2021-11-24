import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzServices {

// Pondre Private para que no se me pueda manipular mi listado de personajes desde otro lugar que no sea mi services
//  , aunque me lo invoquen en el constructor, pero igual necesito obtenerlos.

  private _listadoPersonajes : Personaje[] = [
    {
      nombre : "vegito",
      poder : 3000000,
    },
    {
      nombre :"broly",
      poder : 1000000000
    }
  ]

  get misPersonajes(){
    return [...this._listadoPersonajes];
  }

  constructor(){
    console.log("servicio inicializado");
  };

  agregarNuevoPersonaje(personaje : Personaje){
    this._listadoPersonajes.push(personaje);
  }
}
