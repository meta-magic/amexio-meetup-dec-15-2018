import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3chartdemoComponent } from './d3chartdemo.component';

describe('D3chartdemoComponent', () => {
  let component: D3chartdemoComponent;
  let fixture: ComponentFixture<D3chartdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3chartdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3chartdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
