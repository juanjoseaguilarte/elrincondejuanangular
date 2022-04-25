import { Component, Input, OnInit } from '@angular/core';
import { Comida } from 'src/app/interfaces/comida';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() arrComidas: Comida[] = [] ;
  constructor() { }

  ngOnInit(): void {

  }
  open(event : any) :void{
    console.log(event.target.innerHTML)
  }

}
