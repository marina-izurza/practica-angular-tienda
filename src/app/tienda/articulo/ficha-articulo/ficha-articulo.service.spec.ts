import { TestBed } from '@angular/core/testing';

import { FichaArticuloService } from './ficha-articulo.service';

describe('FichaArticuloService', () => {
  let service: FichaArticuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichaArticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
