import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodegaComponent } from './components/bodega/bodega.component';
import { CartaComponent } from './components/carta/carta.component';
import { HomeComponent } from './components/home/home.component';
import { NavidadComponent } from './components/navidad/navidad.component';
import { ReservaComponent } from './components/reserva/reserva.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', component: HomeComponent },
  { path: 'menu/navidad', component: NavidadComponent },
  { path: 'menu/carta', component: CartaComponent },
  { path: 'menu/bodega', component: BodegaComponent },
  { path: 'reservas', component: ReservaComponent },

  { path: '**', redirectTo: '/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
