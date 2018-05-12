import { TestBed, inject } from '@angular/core/testing';

import { SideNavBarMenuService } from './side-nav-bar-menu.service';

describe('SideNavBarMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideNavBarMenuService]
    });
  });

  it('should be created', inject([SideNavBarMenuService], (service: SideNavBarMenuService) => {
    expect(service).toBeTruthy();
  }));
});
