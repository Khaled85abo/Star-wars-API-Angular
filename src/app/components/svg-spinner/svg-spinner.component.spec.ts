import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSpinnerComponent } from './svg-spinner.component';

describe('SvgSpinnerComponent', () => {
  let component: SvgSpinnerComponent;
  let fixture: ComponentFixture<SvgSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
