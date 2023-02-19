import { Injectable } from '@angular/core';
import { COMIDAS } from '../db/comida.db';
import { Comida } from '../interfaces/comida';

@Injectable({
  providedIn: 'root',
})
export class ComidasService {
  private arrComidas: Comida[];
  private arrSecciones: Comida[];

  constructor() {
    this.arrComidas = COMIDAS;
    this.arrSecciones = COMIDAS;
  }

  getAll(pComida: string = ''): Comida[] {
    //console.log(pComida)
    this.arrComidas = COMIDAS;
    if (!pComida || pComida == '') {
      return this.arrComidas.sort(
        (a, b) => a.formato_racion - b.formato_racion
      );
    }
    return (this.arrComidas = this.arrComidas.filter((section) =>
      section.seccion.includes(pComida)
    ));
  }

  getAllBySection(pComida: string = ''): Comida[] {
    //console.log(pComida)
    this.arrSecciones = COMIDAS;
    if (!pComida || pComida == '') {
      return this.arrSecciones;
    }
    return (this.arrSecciones = this.arrSecciones.filter((section) =>
      section.seccion.includes(pComida)
    ));
  }
}
