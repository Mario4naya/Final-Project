import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPComponent } from './nueva-p.component';

describe('NuevaPComponent', () => {
  let component: NuevaPComponent;
  let fixture: ComponentFixture<NuevaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
