import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Servicio } from '../../services/servicios';

@Component({
  selector: 'app-servicio-card',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="card h-100">
      <img
        [src]="servicio().image"
        [alt]="servicio().title"
        class="card-img-top p-3"
        style="height: 160px; object-fit: contain;"
      />
      <div class="card-body text-center">
        <h3 class="card-title h6">{{ servicio().title }}</h3>
        <p class="card-text fw-bold">{{ servicio().price | currency }}</p>
      </div>
    </div>
  `,
})
export class ServicioCard {
  servicio = input.required<Servicio>();
}