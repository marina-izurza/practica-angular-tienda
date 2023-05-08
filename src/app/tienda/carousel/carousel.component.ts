import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { ITienda } from '../tienda.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  items: ITienda[] = [];
  descripcion: string = "";

  constructor(private servicioCarousel: CarouselService) { }

  ngOnInit(): void {
    this.servicioCarousel.getFotos().subscribe((data: ITienda[]) => {
      this.items = data;
    })
  }
}
