import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMembreComponent } from './formulaire-membre.component';

describe('FormulaireMembreComponent', () => {
  let component: FormulaireMembreComponent;
  let fixture: ComponentFixture<FormulaireMembreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireMembreComponent]
    });
    fixture = TestBed.createComponent(FormulaireMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
