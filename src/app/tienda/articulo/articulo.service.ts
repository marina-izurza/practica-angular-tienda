import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../articulo/articulo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Articulo[]> {
    const urlEndPoint: string = 'http://localhost:3001/ficha1';
    return this.http.get<Articulo[]>(urlEndPoint);
  }
}
