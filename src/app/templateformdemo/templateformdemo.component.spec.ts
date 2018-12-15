import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformdemoComponent } from './templateformdemo.component';

describe('TemplateformdemoComponent', () => {
  let component: TemplateformdemoComponent;
  let fixture: ComponentFixture<TemplateformdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateformdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
