import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnidadArticulo } from './ficha-articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class FichaArticuloService {

  constructor(private http: HttpClient) { }

  public getDetalles(id: number): Observable<IUnidadArticulo[]> {
    const urlEndPoint: string = 'http://localhost:3001/ficha/'+id;
    return this.http.get<IUnidadArticulo[]>(urlEndPoint);
  }
}
