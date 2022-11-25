import { Component, OnInit } from '@angular/core';
import { ComidasService } from 'src/app/services/comidas.service';

@Component({
  selector: 'app-navidad',
  templateUrl: './navidad.component.html',
  styleUrls: ['./navidad.component.css']
})
export class NavidadComponent implements OnInit {

  constructor(private comidaServices: ComidasService) { }

  ngOnInit(): void {
  }

}
