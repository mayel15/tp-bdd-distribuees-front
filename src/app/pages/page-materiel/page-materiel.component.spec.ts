import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaterielComponent } from './page-materiel.component';

describe('PageMaterielComponent', () => {
  let component: PageMaterielComponent;
  let fixture: ComponentFixture<PageMaterielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMaterielComponent]
    });
    fixture = TestBed.createComponent(PageMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
