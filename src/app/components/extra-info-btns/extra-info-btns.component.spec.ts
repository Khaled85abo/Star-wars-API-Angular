import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfoBtnsComponent } from './extra-info-btns.component';

describe('ExtraInfoBtnsComponent', () => {
  let component: ExtraInfoBtnsComponent;
  let fixture: ComponentFixture<ExtraInfoBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraInfoBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraInfoBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
