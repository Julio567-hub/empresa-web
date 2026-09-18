import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Servicios } from './components/servicios/servicios';
 
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'servicios', component: Servicios },
  { path: '**', redirectTo: '' }, // ruta no encontrada → Home
];
