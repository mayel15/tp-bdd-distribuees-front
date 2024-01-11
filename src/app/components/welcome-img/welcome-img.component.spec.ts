import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeIMGComponent } from './welcome-img.component';

describe('WelcomeIMGComponent', () => {
  let component: WelcomeIMGComponent;
  let fixture: ComponentFixture<WelcomeIMGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeIMGComponent]
    });
    fixture = TestBed.createComponent(WelcomeIMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
