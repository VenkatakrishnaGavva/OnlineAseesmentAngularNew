import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginlayoutComponent } from './loginlayout.component';



describe('LoginheaderComponent', () => {
  let component: LoginlayoutComponent;
  let fixture: ComponentFixture<LoginlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
