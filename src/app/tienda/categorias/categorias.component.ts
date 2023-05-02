import { Component } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { ICategorias } from './categorias.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  items: ICategorias[] = [];

  constructor(private servicioCategorias: CategoriasService) { }

  ngOnInit(): void {
    this.servicioCategorias.getItems().subscribe((data: ICategorias[]) => {
      this.items = data;
    })
  }
}
