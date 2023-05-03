import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Articulo } from '../articulo/articulo.model';
import { ArticuloService } from '../articulo/articulo.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})

export class CategoriaComponent implements OnInit{

  articulos: Articulo[] = [];
  idCategoria?: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articuloService: ArticuloService
  ) { }

  ngOnInit(): void {
    this.getParams();
    this.articulos = this.articuloService.getArticulos();
  }

  
  getParams() {
    this.idCategoria = this.route.snapshot.paramMap.get('idCategoria');
  }

  public goArticulo(idCategoria: number): void {
    this.router.navigate(['articulo', idCategoria]);
  }
}
