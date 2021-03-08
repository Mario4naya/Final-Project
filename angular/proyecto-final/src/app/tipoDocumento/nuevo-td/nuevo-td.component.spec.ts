import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTdComponent } from './nuevo-td.component';

describe('NuevoTdComponent', () => {
  let component: NuevoTdComponent;
  let fixture: ComponentFixture<NuevoTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
