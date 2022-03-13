import { TestBed } from '@angular/core/testing';

import { GetAllCharService } from './get-all-char.service';

describe('GetAllCharService', () => {
  let service: GetAllCharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllCharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
