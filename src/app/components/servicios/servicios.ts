import { Component, OnInit, inject, signal } from '@angular/core';
import { Servicios as ServiciosService, Servicio } from '../../services/servicios';
import { ServicioCard } from '../servicio-card/servicio-card';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServicioCard],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios implements OnInit {
  private serviciosService = inject(ServiciosService);
  servicios = signal<Servicio[]>([]);
  cargando = signal(true);

  ngOnInit(): void {
    this.serviciosService.obtenerServicios().subscribe({
      next: (data) => {
        this.servicios.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.cargando.set(false);
      },
    });
  }
}