import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleModulePermissionMapComponent } from './role-module-permission-map.component';

describe('RoleModulePermissionMapComponent', () => {
  let component: RoleModulePermissionMapComponent;
  let fixture: ComponentFixture<RoleModulePermissionMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleModulePermissionMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleModulePermissionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
