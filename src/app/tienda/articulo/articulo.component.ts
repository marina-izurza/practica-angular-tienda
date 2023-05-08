import { Component, OnInit } from '@angular/core';
import { Articulo } from './articulo.model';
import { ArticuloService } from './articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos: Articulo[] = [];

  constructor(
    private articuloService: ArticuloService
  ) { }
  
  ngOnInit(): void {
    this.getDetalles();
  }
  private getDetalles() {
    this.articuloService.getItems().subscribe({
      next: (articulosRequest) => { this.articulos = articulosRequest },
      error: (err) => { this.gestionError(err); }
    })
  }
  
  gestionError(err: any) {
    console.log(err);
  }
  
}
