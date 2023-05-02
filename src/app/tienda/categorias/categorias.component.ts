import { Component } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { ITienda } from '../tienda.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  items: ITienda[] = [];

  constructor(private servicioCategorias: CategoriasService) { }

  ngOnInit(): void {
    this.servicioCategorias.getItems().subscribe((data: ITienda[]) => {
      this.items = data;
    })
  }

  public goCategory(id: number): void {

  }
}
