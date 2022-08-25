import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent  {

  ingresados() {
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifsService) { }

  volverBuscar(termino:string) {
    this.gifsService.buscarGifs(termino);
  }

}
