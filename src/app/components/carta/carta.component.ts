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
  visionHi = false;
  primeraVez = false;

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
  getSection() {}

  posicion() {
    if (this.primeraVez === false) {
      navigator.geolocation.watchPosition(
        (pos) => {
          let { coords: { latitude, longitude } = {} } = pos;

          //if (latitude == 36.1618232 && longitude == -5.3518956) {
          // 36.16160 36.16200 -5.35170 -5.35250
          if (
            latitude! > 36.1616 &&
            latitude! < 36.162 &&
            longitude! < -5.3517 &&
            longitude! > -5.3525
          ) {
            this.visionHi = true;
            this.arrComidas = [];
            this.seccionActual = "Sugerencias Del Día Fuera De Carta";
            this.primeraVez = true;
          } else {
            this.visionHi = false;
          }
        },
        (err) => {
          console.warn('Error en el localizador', err);
        }
      );
    } else {
      this.arrComidas = [];
      this.seccionActual = 'Sugerencias Del Día Fuera De Carta';
    }
  }
}
