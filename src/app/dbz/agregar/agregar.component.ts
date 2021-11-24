import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

//  @Input() agregarForm() : void = "agregar";
 @Input() nuevito : Personaje = {
  nombre : '',
  poder : 0,
 };
//  @Input() personaxes: Personaje[] = [];

//  El output manada informacion del hijo al padfre, enetse caso estoy emitiendole un personaje (nuevito)

            //  @Output() onNewPersonaje : EventEmitter<Personaje> = new EventEmitter();

constructor( private dbzServices :DbzServices){}
agregar(){
  // console.log("HELLOS DBZETEROS")
  // this.nuevoPesonaje.poder=0;
  // this.nuevoPesonaje.nombre='';

  if (this.nuevito.nombre.trim().length === 0){
    console.log("me sali")
    return ;
  }

  // this.personaxes.push(this.nuevito); ----------------------------EL AGG LO HARE EN EL PADRE ,AQUIS SOLO CREO AL NUEVO pERSONAJE

  console.log("gg")
  console.log(this.nuevito);

  // this.onNewPersonaje.emit(this.nuevito);     emitiendo al padre un personaje nuevo que cambia de valor en los inputs
  this.dbzServices.agregarNuevoPersonaje(this.nuevito);
  this.nuevito = {
    nombre : '',
    poder : 0,
  }

  // console.log(this.personaxes);

  }
}
