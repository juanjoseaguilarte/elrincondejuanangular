import { Injectable } from '@angular/core';
import { VINOS } from '../db/vino.db';
import { Vino } from '../interfaces/vino';

@Injectable({
  providedIn: 'root',
})
export class VinosService {
  private arrVinos: Vino[];

  constructor() {
  this.arrVinos = VINOS;
  }

  getAll(pVino: string = ''): Vino[] {
    //console.log(pComida)
    this.arrVinos = VINOS;
    if (!pVino || pVino == '') {
    return this.arrVinos;
  }
    return (this.arrVinos = this.arrVinos.filter((section) =>
    section.seccion.includes(pVino)
  ));
  }
  
  getByFilter(pFilter: string) {
    this.arrVinos = VINOS;
    if (!pFilter || pFilter == ''){
      return this.arrVinos;
    }
    return (this.arrVinos = this.arrVinos.filter((vino) =>
      vino.uvas.includes(pFilter)
    ));
  
  }

}
