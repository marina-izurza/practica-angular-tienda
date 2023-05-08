import { Component } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { ITienda } from '../tienda.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  items: ITienda[] = [];
  descripcion: string = "";

  constructor(
    private servicioCategorias: CategoriasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicioCategorias.getItems().subscribe((data: ITienda[]) => {
      this.items = data;
    })
  }

  public goCategoria(descripcion: any) {
    this.router.navigate(['/categoria/' + descripcion]);
  }
}
