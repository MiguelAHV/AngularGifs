import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent  {

  resultados() {
    console.log(this.gifsService.resultados)
    return this.gifsService.resultados;
  }

  constructor( private gifsService: GifsService) { }

  

}
