import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialComponent } from './historial/historial.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    HistorialComponent,
    BuscadorComponent,
    ResultadoComponent,
    PrincipalComponent
  ],
  exports: [
    HistorialComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContenidoModule { }
