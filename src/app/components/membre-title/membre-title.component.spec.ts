import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreTitleComponent } from './membre-title.component';

describe('MembreTitleComponent', () => {
  let component: MembreTitleComponent;
  let fixture: ComponentFixture<MembreTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembreTitleComponent]
    });
    fixture = TestBed.createComponent(MembreTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
