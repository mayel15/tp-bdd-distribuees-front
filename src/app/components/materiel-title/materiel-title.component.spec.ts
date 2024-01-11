import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielTitleComponent } from './materiel-title.component';

describe('MaterielTitleComponent', () => {
  let component: MaterielTitleComponent;
  let fixture: ComponentFixture<MaterielTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterielTitleComponent]
    });
    fixture = TestBed.createComponent(MaterielTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
