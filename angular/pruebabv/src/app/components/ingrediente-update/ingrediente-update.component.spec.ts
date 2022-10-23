import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteUpdateComponent } from './ingrediente-update.component';

describe('IngredienteUpdateComponent', () => {
  let component: IngredienteUpdateComponent;
  let fixture: ComponentFixture<IngredienteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredienteUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredienteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
