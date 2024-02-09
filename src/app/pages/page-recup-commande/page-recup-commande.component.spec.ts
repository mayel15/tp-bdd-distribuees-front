import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecupCommandeComponent } from './page-recup-commande.component';

describe('PageRecupCommandeComponent', () => {
  let component: PageRecupCommandeComponent;
  let fixture: ComponentFixture<PageRecupCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRecupCommandeComponent]
    });
    fixture = TestBed.createComponent(PageRecupCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
