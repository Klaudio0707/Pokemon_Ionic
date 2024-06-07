import { TestBed } from '@angular/core/testing';

import { POKEAPIService } from './pokeapi.service';

describe('POKEAPIService', () => {
  let service: POKEAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(POKEAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
