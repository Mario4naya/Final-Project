import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTdComponent } from './editar-td.component';

describe('EditarTdComponent', () => {
  let component: EditarTdComponent;
  let fixture: ComponentFixture<EditarTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
