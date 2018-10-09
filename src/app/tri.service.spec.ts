import { TestBed } from '@angular/core/testing';

import { TriService } from './tri.service';

describe('TriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TriService = TestBed.get(TriService);
    expect(service).toBeTruthy();
  });
});
