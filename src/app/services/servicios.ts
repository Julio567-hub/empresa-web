import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
export interface Servicio {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}
 
@Injectable({ providedIn: 'root' })
export class Servicios {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';
 
  obtenerServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.apiUrl);
  }
}

