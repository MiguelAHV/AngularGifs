import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, InterfaceGifs } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial : string[] = [];
  private apiKey     : string = 'wBYUDqL81gaFrNFoAbXJbdKYWKU4DYTp';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';



  get historial() {
    return [...this._historial];
  }

  public resultados: any;

  constructor(private http: HttpClient) { }


  buscarGifs( buscado: string) {

    buscado = buscado.trim().toLocaleLowerCase();

    if(buscado.trim().length === 0) {
      return;
    }

    if( !this._historial.includes(buscado)) {
      this._historial.unshift(buscado);
      this._historial = this._historial.slice(0, 10);
    }

    const parametros = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('limit', '20')
      .set('q', buscado);

    this.http.get<InterfaceGifs>(`${this.servicioUrl}/search`, {params: parametros})
        .subscribe( (respuesta) => {

          this.resultados = respuesta.data;
          

          
        } )
  }

}
