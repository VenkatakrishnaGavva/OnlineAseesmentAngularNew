import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionpaperuploadComponent } from './questionpaperupload.component';

describe('QuestionpaperuploadComponent', () => {
  let component: QuestionpaperuploadComponent;
  let fixture: ComponentFixture<QuestionpaperuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionpaperuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionpaperuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
