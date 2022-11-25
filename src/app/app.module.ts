import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CartaComponent } from './components/carta/carta.component';
import { BodegaComponent } from './components/bodega/bodega.component';
import { CardComponent } from './components/card/card.component';
import { VinoCardComponent } from './components/vino-card/vino-card.component';
import { NavidadComponent } from './components/navidad/navidad.component';
import { ReservaComponent } from './components/reserva/reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartaComponent,
    BodegaComponent,
    CardComponent,
    VinoCardComponent,
    NavidadComponent,
    ReservaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
