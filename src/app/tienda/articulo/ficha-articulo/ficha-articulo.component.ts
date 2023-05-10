import { Component, OnInit } from '@angular/core';
import { unidadArticulo } from './ficha-articulo.model';
import { FichaArticuloService } from './ficha-articulo.service';
import { IUnidadArticulo } from './ficha-articulo.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-articulo',
  templateUrl: './ficha-articulo.component.html',
  styleUrls: ['./ficha-articulo.component.scss']
})
export class FichaArticuloComponent implements OnInit {

  articulo: IUnidadArticulo[] = [];
  idArticulo: number = 0;

  constructor(
    private fichaService: FichaArticuloService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDetalles();
    console.log(this.getIdArticulo());
  }

  private getDetalles() {
    this.fichaService.getDetalles(this.getIdArticulo()).subscribe((data: IUnidadArticulo[]) => {
      this.articulo = data;
    })
  }
  gestionError(err: any) {throw new Error(err);}

  private getIdArticulo() {
    const id = this.route.snapshot.paramMap.get('idArticulo');
    this.idArticulo = id ? parseInt(id, 10) : 0;
    return this.idArticulo;
  }

}
