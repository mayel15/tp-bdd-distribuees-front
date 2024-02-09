import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupFormComponent } from './recup-form.component';

describe('RecupFormComponent', () => {
  let component: RecupFormComponent;
  let fixture: ComponentFixture<RecupFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecupFormComponent]
    });
    fixture = TestBed.createComponent(RecupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
