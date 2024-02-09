import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupFormCommandesComponent } from './recup-form-commandes.component';

describe('RecupFormCommandesComponent', () => {
  let component: RecupFormCommandesComponent;
  let fixture: ComponentFixture<RecupFormCommandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecupFormCommandesComponent]
    });
    fixture = TestBed.createComponent(RecupFormCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
