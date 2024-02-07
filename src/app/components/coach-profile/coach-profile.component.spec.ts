import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfileComponent } from './coach-profile.component';

describe('CoachProfileComponent', () => {
  let component: CoachProfileComponent;
  let fixture: ComponentFixture<CoachProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoachProfileComponent]
    });
    fixture = TestBed.createComponent(CoachProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
