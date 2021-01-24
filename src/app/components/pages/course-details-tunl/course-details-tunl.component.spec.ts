import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsTUNLComponent } from './course-details-tunl.component';

describe('CourseDetailsTUNLComponent', () => {
  let component: CourseDetailsTUNLComponent;
  let fixture: ComponentFixture<CourseDetailsTUNLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailsTUNLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsTUNLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
