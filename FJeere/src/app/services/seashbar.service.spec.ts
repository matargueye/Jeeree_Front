import { TestBed } from '@angular/core/testing';

import { SeashbarService } from './seashbar.service';

describe('SeashbarService', () => {
  let service: SeashbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeashbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
