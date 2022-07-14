import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  dia: string = "";

  constructor() { 

   this.arrNumeros = this.arrNumeros.sort(function() { return Math.random() - 0.5 });
    console.log(this.arrNumeros)
  }

  ngOnInit(): void {

    const fechaComoCadena = Date.now(); // día lunes
    const dias = [
      'domingo',
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'sabado',
    ];
    const numeroDia = new Date(fechaComoCadena).getDay();
    this.dia = dias[numeroDia];
    console.log(this.dia);
  }

}
