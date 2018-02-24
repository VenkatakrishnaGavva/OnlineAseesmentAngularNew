import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerStatatusComponent } from './answer-statatus.component';

describe('AnswerStatatusComponent', () => {
  let component: AnswerStatatusComponent;
  let fixture: ComponentFixture<AnswerStatatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerStatatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerStatatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
