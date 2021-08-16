import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionStartComponent } from './option-start.component';

describe('OptionStartComponent', () => {
  let component: OptionStartComponent;
  let fixture: ComponentFixture<OptionStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
