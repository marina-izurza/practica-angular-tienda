import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITienda } from '../tienda.interface';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  public getFotos(): Observable<ITienda[]> {
    const urlEndPoint: string = 'http://localhost:3001/carousel';
    return this.http.get<ITienda[]>(urlEndPoint);
  }
}
