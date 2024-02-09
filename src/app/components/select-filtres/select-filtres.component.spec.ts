import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFiltresComponent } from './select-filtres.component';

describe('SelectFiltresComponent', () => {
  let component: SelectFiltresComponent;
  let fixture: ComponentFixture<SelectFiltresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFiltresComponent]
    });
    fixture = TestBed.createComponent(SelectFiltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
