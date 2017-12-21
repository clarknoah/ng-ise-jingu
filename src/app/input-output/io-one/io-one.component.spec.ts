import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoOneComponent } from './io-one.component';

describe('IoOneComponent', () => {
  let component: IoOneComponent;
  let fixture: ComponentFixture<IoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
