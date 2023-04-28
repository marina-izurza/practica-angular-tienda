import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBanners } from './banners.interface';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private http: HttpClient) { }

  public getFotos(): Observable<IBanners[]> {
    const urlEndPoint: string = 'http://localhost:3001/banners';
    return this.http.get<IBanners[]>(urlEndPoint);
  }
}
