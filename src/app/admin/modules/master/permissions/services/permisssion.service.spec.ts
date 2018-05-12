import { TestBed, inject } from '@angular/core/testing';

import { PermisssionService } from './permisssion.service';

describe('PermisssionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermisssionService]
    });
  });

  it('should be created', inject([PermisssionService], (service: PermisssionService) => {
    expect(service).toBeTruthy();
  }));
});
