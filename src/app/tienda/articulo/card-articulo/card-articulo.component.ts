import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-card-articulo',
  templateUrl: './card-articulo.component.html',
  styleUrls: ['./card-articulo.component.scss']
})
export class CardArticuloComponent {
  
  @Input() articulo?: Articulo;
  @Input() boton?: string = "Botón";
  @Output() click: EventEmitter<Articulo> = new EventEmitter<Articulo>();

  public pulsarBoton(): void {
    this.click.emit(this.articulo);
  }
}
