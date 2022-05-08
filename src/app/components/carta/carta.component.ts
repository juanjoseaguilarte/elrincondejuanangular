import { Component, EventEmitter, OnInit } from '@angular/core';
import { Comida } from 'src/app/interfaces/comida';
import { ComidasService } from 'src/app/services/comidas.service';



@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  arrComidas: Comida[] = [];
  arrSecciones: any[] = [];
 

  constructor(
    private comidasServices: ComidasService,
  ) {

  }

  ngOnInit(): void {
    this.arrComidas = this.comidasServices.getAll('Jamón Ibérico De Bellota Y Corte');
    this.arrSecciones = this.comidasServices.getAll();
    this.arrSecciones = this.arrSecciones.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item.seccion) 
      }
      return acc;
    }, []);
    this.arrSecciones = [].concat.apply([], this.arrSecciones);
    this.arrSecciones = this.arrSecciones.reduce((acc, item) => {
          if (!acc.includes(item)) {
            acc.push(item);
          }
          return acc;
        }, []);
    console.log(this.arrSecciones)
    
  }
  open(event: any): void {
    console.log(event.target.innerHTML)
  }
  getAll(pPlato: string) {
    this.arrComidas = this.comidasServices.getAll(pPlato);
    
  }
  getSection() {
    
  }
  

}
