import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posicion() {
      navigator.geolocation.watchPosition(
        (pos) => {
          let { coords: { latitude, longitude } = {} } = pos;

          //if (latitude == 36.1618232 && longitude == -5.3518956) {
            // 36.16160 36.16200 -5.35170 -5.35250
          if (
            latitude! > 36.1616000 &&
            latitude! < 36.162000 &&
            longitude! < -5.3517000 &&
            longitude! > -5.3525000
          ) {
            console.log('siii');
          } else {
            console.log({ latitude, longitude });
          }
          

        },
        (err) => {
          console.warn('Error en el localizador', err);
        },
        { timeout: 30000, maximumAge: 60000 }
      );
  }
}
