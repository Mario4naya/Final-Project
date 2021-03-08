import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTdComponent } from './listar-td.component';

describe('ListarTdComponent', () => {
  let component: ListarTdComponent;
  let fixture: ComponentFixture<ListarTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
