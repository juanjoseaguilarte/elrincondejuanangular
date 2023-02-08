import { Component, EventEmitter, OnInit } from '@angular/core';
import { Comida } from 'src/app/interfaces/comida';
import { ComidasService } from 'src/app/services/comidas.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
})
export class CartaComponent implements OnInit {
  arrComidas: Comida[] = [];
  arrSecciones: any[] = [];
  seccionActual: string = 'Jamón Ibérico De Bellota Y Corte';
  top: any = '';
  mostrarImagen = false;
  primeraVez = false;
  latidudActual: number | any = 0;
  longitudActual: number | any = 0;
  isFestivo: boolean = false;

  constructor(private comidasServices: ComidasService) {}

  ngOnInit(): void {
    this.arrComidas = this.comidasServices.getAll(
      'Jamón Ibérico De Bellota Y Corte'
    );
    this.arrSecciones = this.comidasServices.getAll();
    this.arrSecciones = this.arrSecciones.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item.seccion);
      }
      ('Jamón Ibérico De Bellota Y Corte');
      return acc;
    }, []);
    this.arrSecciones = [].concat.apply([], this.arrSecciones);
    this.arrSecciones = this.arrSecciones.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);

    navigator.geolocation.watchPosition(
      async (pos) => {
        let { coords: { latitude, longitude } = {} } = await pos;
        this.latidudActual = latitude;
        this.longitudActual = longitude;
        console.log(this.latidudActual);
        console.log(this.longitudActual);
        if (
          this.latidudActual! > 36.1609 &&
          this.latidudActual! < 36.1627 &&
          this.longitudActual! < -5.3507 &&
          this.longitudActual! > -5.353
        ) {
          this.mostrarImagen = true;
        }
      },
      (err) => {
        console.warn('Error en el localizador', err);
      }
    );
  }
  open(event: any): void {
    console.log(event.target.innerHTML);
  }
  getAll(pPlato: string) {
    this.arrComidas = this.comidasServices.getAll(pPlato);
    this.seccionActual = pPlato;
    if (pPlato == 'Top 5') {
      this.top = this.arrComidas.length;
    }
  }
  //36.1618291 -5.3518783
  posicion() {
    if (
      this.latidudActual! > 36.1609 &&
      this.latidudActual! < 36.1627 &&
      this.longitudActual! < -5.3507 &&
      this.longitudActual! > -5.353
    ) {
      this.mostrarImagen = true;
      this.arrComidas = [];
      this.seccionActual = 'Sugerencias Del Día Fuera De Carta';
      this.primeraVez = true;
    } else {
      this.mostrarImagen = false;
      this.seccionActual = 'Sugerencias Del Día Fuera De Carta';
      this.arrComidas = [];
    }
  }
}
