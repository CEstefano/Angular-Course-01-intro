import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  // template inicial

  template :  `
  <button (click) = 'SumaYresta(-base)' > - {{base}} </button>

  <span> {{numero}}</span>

  <button (click) = 'SumaYresta(base)' >  + {{base}} </button>
  ` ,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})

export class Contador {

  title : string = 'Contador App';
  numero : number = 10;
  base : number = 5;


  SumaYresta (valor : number){
    this.numero += valor;
    }
}
