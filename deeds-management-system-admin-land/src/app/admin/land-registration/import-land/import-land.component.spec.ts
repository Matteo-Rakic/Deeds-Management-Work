import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLandComponent } from './import-land.component';

describe('ImportLandComponent', () => {
  let component: ImportLandComponent;
  let fixture: ComponentFixture<ImportLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
