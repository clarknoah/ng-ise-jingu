import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamRoutingComponent } from './param-routing.component';

describe('ParamRoutingComponent', () => {
  let component: ParamRoutingComponent;
  let fixture: ComponentFixture<ParamRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
