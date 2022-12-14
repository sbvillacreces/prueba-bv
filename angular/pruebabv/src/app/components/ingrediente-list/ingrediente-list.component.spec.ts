import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteListComponent } from './ingrediente-list.component';

describe('IngredienteListComponent', () => {
  let component: IngredienteListComponent;
  let fixture: ComponentFixture<IngredienteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredienteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
