import { Component, OnInit } from '@angular/core';
import { BannersService } from './banners.service';
import { IBanners } from './banners.interface';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit{
  fotos: IBanners[] = [];

  constructor(private servicioBanners: BannersService) { }

  ngOnInit(): void {
    this.servicioBanners.getFotos().subscribe((data: IBanners[]) => {
      this.fotos = data;
    })
  }
}
