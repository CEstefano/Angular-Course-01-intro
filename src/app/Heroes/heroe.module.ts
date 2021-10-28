// Mi primer modulo, me sirve para trabajar x
// partes y llamarlos en el App component principal como modulo importado , para usarlo



import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Heroe } from "./Heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule ({
 declarations: [Heroe , ListadoComponent],

 exports: [ListadoComponent],

//Coomon module sirve para traer directivas de angula y poder usarlas
 imports : [CommonModule]

})

export class HeroesModule{}
