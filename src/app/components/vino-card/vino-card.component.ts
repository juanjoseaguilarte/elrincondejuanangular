import { Component, Input, OnInit } from '@angular/core';
import { Vino } from 'src/app/interfaces/vino';

@Component({
  selector: 'app-vino-card',
  templateUrl: './vino-card.component.html',
  styleUrls: ['./vino-card.component.css'],
})
export class VinoCardComponent implements OnInit {
  @Input() arrVinos: Vino[] = [];
  
  constructor() {}

  ngOnInit(): void {}
}
