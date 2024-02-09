import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecupMaterielComponent } from './page-recup-materiel.component';

describe('PageRecupMaterielComponent', () => {
  let component: PageRecupMaterielComponent;
  let fixture: ComponentFixture<PageRecupMaterielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRecupMaterielComponent]
    });
    fixture = TestBed.createComponent(PageRecupMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
