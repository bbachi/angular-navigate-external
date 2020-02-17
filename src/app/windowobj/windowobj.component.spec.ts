import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowobjComponent } from './windowobj.component';

describe('WindowobjComponent', () => {
  let component: WindowobjComponent;
  let fixture: ComponentFixture<WindowobjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowobjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
