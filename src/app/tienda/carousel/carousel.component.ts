import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { ITienda } from '../tienda.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  fotos: ITienda[] = [];

  constructor(private servicioCarousel: CarouselService) { }

  ngOnInit(): void {
    this.servicioCarousel.getFotos().subscribe((data: ITienda[]) => {
      this.fotos = data;
    })
  }
}
