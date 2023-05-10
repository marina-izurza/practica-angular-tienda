import { Component, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../articulo.model';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.scss']
})
export class ListaArticulosComponent {

  idCategoria?: any;
  articulos: Articulo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articuloService: ArticuloService
  ) { }

  ngOnInit(): void {
    this.obtenerArticulosRest();
    this.getCategoria();
  }
  getCategoria() {
    this.idCategoria = this.route.snapshot.paramMap.get('idCategoria');
  }
  private obtenerArticulosRest() {
    this.articuloService.getItems().subscribe( //Si nos llegan datos:
      (data) => {
        data.forEach((articulo) => {
          const articuloAIncluir: Articulo = new Articulo(
            articulo.id, articulo.nombre, articulo.precio, articulo.descripcion, articulo.tallas, articulo.fav, articulo.imagen);
          this.articulos.push(articuloAIncluir);
        })
      }
    )
  }

  public goFicha(idArticulo: number): void {
    this.router.navigate(['articulo-ficha', idArticulo]);
  }

}
