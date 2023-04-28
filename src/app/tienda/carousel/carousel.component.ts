import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { ICarousel } from './carousel.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  fotos: ICarousel[] = [];

  constructor(private servicioCarousel: CarouselService) { }

  ngOnInit(): void {
    this.servicioCarousel.getFotos().subscribe((data: ICarousel[]) => {
      this.fotos = data;
    })
  }
}
