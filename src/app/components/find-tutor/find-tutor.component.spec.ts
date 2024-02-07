import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTutorComponent } from './find-tutor.component';

describe('FindTutorComponent', () => {
  let component: FindTutorComponent;
  let fixture: ComponentFixture<FindTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindTutorComponent]
    });
    fixture = TestBed.createComponent(FindTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
