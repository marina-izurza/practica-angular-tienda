import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITienda } from '../tienda.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  public getItems(): Observable<ITienda[]> {
    const urlEndPoint: string = 'http://localhost:3001/categories';
    return this.http.get<ITienda[]>(urlEndPoint);
  }
}
