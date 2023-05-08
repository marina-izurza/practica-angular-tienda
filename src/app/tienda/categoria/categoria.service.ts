import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../articulo/articulo.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Articulo[]> {
    const urlEndPoint: string = 'http://localhost:3001/clothes';
    return this.http.get<Articulo[]>(urlEndPoint);
  }
}
