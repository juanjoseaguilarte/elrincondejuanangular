import { Injectable } from '@angular/core';
import { COMIDAS } from '../db/comida.db';
import { Comida } from '../interfaces/comida';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  private arrComidas: Comida[];

  constructor() {
    this.arrComidas = COMIDAS
   }

  getAll(pComida: string = ""): Comida[]{
    //console.log(pComida)
    this.arrComidas = COMIDAS;
    if (!pComida || pComida == '') {
      return this.arrComidas.sort(
        (a, b) => a.formato_racion - b.formato_racion
      );
    }
    return (this.arrComidas = this.arrComidas.filter(
      (section) => section.seccion.includes(pComida)
    ));
  }
  }


