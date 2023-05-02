import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategorias } from './categorias.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  public getItems(): Observable<ICategorias[]> {
    const urlEndPoint: string = 'http://localhost:3001/categories';
    return this.http.get<ICategorias[]>(urlEndPoint);
  }
}
