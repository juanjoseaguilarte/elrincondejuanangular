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

  constructor(
    private comidasServices : ComidasService,
    ) { 

  }

  ngOnInit(): void {
    this.arrComidas = this.comidasServices.getAll();
  }
  open(event : any) :void{
    console.log(event.target.innerHTML)
  }
}
