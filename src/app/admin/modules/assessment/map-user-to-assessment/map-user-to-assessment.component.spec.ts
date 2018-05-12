import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapUserToAssessmentComponent } from './map-user-to-assessment.component';

describe('MapUserToAssessmentComponent', () => {
  let component: MapUserToAssessmentComponent;
  let fixture: ComponentFixture<MapUserToAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapUserToAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapUserToAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
