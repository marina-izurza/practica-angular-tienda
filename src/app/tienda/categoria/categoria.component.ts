import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Articulo } from '../articulo/articulo.model';
import { CategoriaService } from './categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})

export class CategoriaComponent implements OnInit {

  articulos: Articulo[] = [];
  idCategoria?: any;
  idArticulo?: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.getCategoria();
    this.getArticulos();
  }

  private getArticulos(): void {
    this.categoriaService.getItems().subscribe({
      next: (articulosRequest) => { this.articulos = articulosRequest },
      error: (err) => { this.gestionError(err); }
    })
  }

  private gestionError(err: any) {
    console.log(err);
  }

  //Nos da el nombre de la categoria
  public getCategoria() {
    this.idCategoria = this.route.snapshot.paramMap.get('idCategoria');
  }

  //Redirige al usuario a la ruta específica
  public goArticulo(idArticulo: number): void {
    this.router.navigate(['articulo', idArticulo]);
  }
}
