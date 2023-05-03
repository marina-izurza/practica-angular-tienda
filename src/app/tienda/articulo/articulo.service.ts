import { Injectable } from '@angular/core';
import { Articulo } from './articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor() { }

  public getArticulos(): Articulo[] {

    const nuevosArticulos: Articulo[] = [];

    for (let i = 1; i < 10; i++) {
      const articulo: Articulo = new Articulo(i,("Articulo->" + i), 120);
      nuevosArticulos.push(articulo);
    }

    return nuevosArticulos;
    
  }
}
