import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCComponent } from './nueva-c.component';

describe('NuevaCComponent', () => {
  let component: NuevaCComponent;
  let fixture: ComponentFixture<NuevaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
