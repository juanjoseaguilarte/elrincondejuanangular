import { Injectable } from '@angular/core';
import { COMIDAS } from '../db/comida.db';
import { Comida } from '../interfaces/comida';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  private arrComidas: Comida[];
  private arrSecction: any[];

  constructor() {
    this.arrComidas = COMIDAS;
    this.arrSecction = [];
   }

  getAll(pComida: string = ""): Comida[]{
    //console.log(pComida)
    this.arrComidas = COMIDAS;
    if (!pComida || pComida == '') {
      return this.arrComidas;
    }
    return (this.arrComidas = this.arrComidas.filter(
      (section) => section.seccion.includes(pComida)
    ));
  }

  }


