import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticulo } from './articulo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  id: number = 0;

  constructor(private http: HttpClient) { }

  public getItems(): Observable<IArticulo[]> {
    const urlEndPoint: string = 'http://localhost:3001/clothes';
    return this.http.get<IArticulo[]>(urlEndPoint);
  }
  
}
