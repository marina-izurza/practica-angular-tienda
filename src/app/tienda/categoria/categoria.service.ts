import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITienda } from '../tienda.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public getItems(): Observable<ITienda[]> {
    const urlEndPoint: string = 'http://localhost:3001/clothes';
    return this.http.get<ITienda[]>(urlEndPoint);
  }
}
