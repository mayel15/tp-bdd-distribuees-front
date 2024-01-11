import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGroupeComponent } from './page-groupe.component';

describe('PageGroupeComponent', () => {
  let component: PageGroupeComponent;
  let fixture: ComponentFixture<PageGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGroupeComponent]
    });
    fixture = TestBed.createComponent(PageGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
