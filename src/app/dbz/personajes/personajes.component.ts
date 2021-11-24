import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {
      // @Input() personaxes: Personaje[] = [];

      get personaxes() {
        return this.DbzService.misPersonajes;
      }

      constructor(private DbzService : DbzServices ){}

      // @Input('data') personaxes: any[] = [];
      //puedo ponerle al input un nombre propio "data" para llamarlo asi en el amin-page [data]
}
