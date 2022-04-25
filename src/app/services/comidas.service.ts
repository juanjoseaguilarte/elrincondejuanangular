import { Injectable } from '@angular/core';
import { COMIDAS } from '../db/comida.db';
import { Comida } from '../interfaces/comida';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  private arrComidas: Comida[];

  constructor(
    ) {
    this.arrComidas = COMIDAS

   }

  getAll(): Comida[]{
    return this.arrComidas;
  }
}
