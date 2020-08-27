import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaldisplayComponent } from './finaldisplay.component';

describe('FinaldisplayComponent', () => {
  let component: FinaldisplayComponent;
  let fixture: ComponentFixture<FinaldisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinaldisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
