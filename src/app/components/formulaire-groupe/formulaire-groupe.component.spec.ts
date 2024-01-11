import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireGroupeComponent } from './formulaire-groupe.component';

describe('FormulaireGroupeComponent', () => {
  let component: FormulaireGroupeComponent;
  let fixture: ComponentFixture<FormulaireGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireGroupeComponent]
    });
    fixture = TestBed.createComponent(FormulaireGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
