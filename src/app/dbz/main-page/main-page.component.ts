import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // 1era ///// Forma de atraer personajes , inicializando arreglo vacio y trallendolo del servicio en el contructor
  // listadoPersonajes : Personaje[] = []

    nuevoPesonaje : Personaje = {
      nombre : '',
      poder : 0,
    }

    // agregarNuevoaLista(argumentsEvent : Personaje){
          // console.log(argumentsEvent)
          // debugger;  para hacer un breakpoint con codigo

          // this.listadoPersonajes.push(argumentsEvent)
    // }


    //2DA FORMA  :   usando un get y luego usando el metodo como variable tipo array en ele Agr2garNuevoaLista


    // get listadoPersonajes() : Personaje[] {
    //   return this.dbzServices.listadoPersonajes;
    // }

    constructor(){}

    //constructor( private dbzServices : DbzServices){
              /////////////7// 1era forma de traer lospersonajes del servicio

              // this.listadoPersonajes = this.dbzServices.listadoPersonajes;
    // }




    // agregar(){
    //   // console.log("HELLOS DBZETEROS")
    //   // this.nuevoPesonaje.poder=0;
    //   // this.nuevoPesonaje.nombre='';
    //   console.log(this.listadoPersonajes);

    //   if (this.nuevoPesonaje.nombre.trim().length === 0){
    //     console.log("me sali")
    //     return ;
    //   }

    //   this.listadoPersonajes.push(this.nuevoPesonaje);

    //   console.log("gg")

    //   this.nuevoPesonaje = {
    //     nombre : '',
    //     poder : 0,
    //   }
    //   console.log(this.nuevoPesonaje);
    //   }
    }

    //////////////////////////////// AGRegAR CON EVENT -->  (SUBMIBT)= AGREGAR($ EVEnT)

    // agregar(event : any){
    //   event.preventDefault();
    //   console.log("HELLOS DBZETEROS")
    // }

    // cambiarNombre(event : any){
    //     console.log(event.target.value)
    // }

