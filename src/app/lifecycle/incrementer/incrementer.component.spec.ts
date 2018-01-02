import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementerComponent } from './incrementer.component';

describe('IncrementerComponent', () => {
  let component: IncrementerComponent;
  let fixture: ComponentFixture<IncrementerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
