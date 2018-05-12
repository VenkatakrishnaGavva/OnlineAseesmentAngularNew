import { TestBed, inject } from '@angular/core/testing';

import { RoleModulePermissionMapService } from './role-module-permission-map.service';

describe('RoleModulePermissionMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleModulePermissionMapService]
    });
  });

  it('should be created', inject([RoleModulePermissionMapService], (service: RoleModulePermissionMapService) => {
    expect(service).toBeTruthy();
  }));
});
