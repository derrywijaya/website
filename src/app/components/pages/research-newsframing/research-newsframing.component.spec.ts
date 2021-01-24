import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchNewsframingComponent } from './research-newsframing.component';

describe('ResearchNewsframingComponent', () => {
  let component: ResearchNewsframingComponent;
  let fixture: ComponentFixture<ResearchNewsframingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchNewsframingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchNewsframingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
