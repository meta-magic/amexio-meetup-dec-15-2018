import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlayoutdemoComponent } from './gridlayoutdemo.component';

describe('GridlayoutdemoComponent', () => {
  let component: GridlayoutdemoComponent;
  let fixture: ComponentFixture<GridlayoutdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridlayoutdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridlayoutdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
