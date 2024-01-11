import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMaterielComponent } from './formulaire-materiel.component';

describe('FormulaireMaterielComponent', () => {
  let component: FormulaireMaterielComponent;
  let fixture: ComponentFixture<FormulaireMaterielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireMaterielComponent]
    });
    fixture = TestBed.createComponent(FormulaireMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
