import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoThreeComponent } from './io-three.component';

describe('IoThreeComponent', () => {
  let component: IoThreeComponent;
  let fixture: ComponentFixture<IoThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
