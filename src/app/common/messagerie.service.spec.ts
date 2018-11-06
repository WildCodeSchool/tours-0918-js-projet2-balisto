import { TestBed } from '@angular/core/testing';

import { MessagerieService } from './messagerie.service';

describe('MessagerieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagerieService = TestBed.get(MessagerieService);
    expect(service).toBeTruthy();
  });
});
