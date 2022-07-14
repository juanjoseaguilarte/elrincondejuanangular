import { Component, OnInit } from '@angular/core';
import { Vino } from 'src/app/interfaces/vino';
import { VinosService } from 'src/app/services/vinos.service';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css'],
})
export class BodegaComponent implements OnInit {
  arrVinos: Vino[] = [];
  arrSecciones: any[] = [];
  arrUvas: any[] = [];
  seccionActual: string = "Vino Por Copas";
  constructor(private vinosServices: VinosService) {}

  ngOnInit(): void {
    this.arrVinos = this.vinosServices.getAll('Vino Por Copas');

    this.arrSecciones = this.vinosServices.getAll();
    
    this.reducirSecciones();
    
    this.arrUvas = this.vinosServices.getAll();
   

    this.reducirUvas();

  }
  private reducirUvas() {
    this.arrUvas = this.arrUvas.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item.uvas);
      }
      return acc;
    }, []);
    //console.log('desde el pirmer ' + this.arrUvas);
    this.arrUvas = [].concat.apply([], this.arrUvas);
    this.arrUvas = this.arrUvas.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);
    
  }

  private reducirSecciones() {
    this.arrSecciones = this.arrSecciones.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item.seccion);
      }
      return acc;
    }, []);
    //console.log('desde el pirmer ' + this.arrSecciones);
    this.arrSecciones = [].concat.apply([], this.arrSecciones);
    this.arrSecciones = this.arrSecciones.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);
  }

  getAll(pVino: any) {
    this.arrVinos = this.vinosServices.getAll(pVino);
    this.seccionActual = pVino;
  }
  getByFilter(pFilter: string) {
    this.arrVinos = this.vinosServices.getByFilter(pFilter);
    this.seccionActual = pFilter.toUpperCase();

  }
}
