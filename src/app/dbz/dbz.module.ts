import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzServices } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [MainPageComponent],
  imports: [ CommonModule , FormsModule ],
  // aqui van los Servicios, que son como un singleton , una unica instancia del mismo que se usara
  // no se ejecutan hasta que alguien lo requiera(clase,otro servicio,pipe,etc.)
  providers : [DbzServices],
})
export class DbzModule { }
