import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTitleComponent } from './group-title.component';

describe('GroupTitleComponent', () => {
  let component: GroupTitleComponent;
  let fixture: ComponentFixture<GroupTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupTitleComponent]
    });
    fixture = TestBed.createComponent(GroupTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
