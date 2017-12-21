import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoTwoComponent } from './io-two.component';

describe('IoTwoComponent', () => {
  let component: IoTwoComponent;
  let fixture: ComponentFixture<IoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
