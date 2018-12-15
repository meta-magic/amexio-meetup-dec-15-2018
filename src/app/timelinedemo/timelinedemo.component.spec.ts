import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinedemoComponent } from './timelinedemo.component';

describe('TimelinedemoComponent', () => {
  let component: TimelinedemoComponent;
  let fixture: ComponentFixture<TimelinedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
