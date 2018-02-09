import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseJinguComponent } from './ise-jingu.component';

describe('IseJinguComponent', () => {
  let component: IseJinguComponent;
  let fixture: ComponentFixture<IseJinguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseJinguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseJinguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
