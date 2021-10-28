import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes : string[] = ['capi' , 'hulk',
  'las nalgas de america del sur' , 'El condor'];
  heroeBorrado : string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }

  borraraHulk(){
    let cero = this.heroes.indexOf('hulk')
    console.log (cero)

    let array2 = (this.heroes.map(hero => {
      return  hero !== 'hulk';
  }));

    console.log(array2);


}

}
