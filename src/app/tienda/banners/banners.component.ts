import { Component, OnInit } from '@angular/core';
import { BannersService } from './banners.service';
import { ITienda } from '../tienda.interface';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit{
  fotos: ITienda[] = [];

  constructor(private servicioBanners: BannersService) { }

  ngOnInit(): void {
    this.servicioBanners.getFotos().subscribe((data: ITienda[]) => {
      this.fotos = data;
    })
  }
}
