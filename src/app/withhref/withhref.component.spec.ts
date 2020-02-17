import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithhrefComponent } from './withhref.component';

describe('WithhrefComponent', () => {
  let component: WithhrefComponent;
  let fixture: ComponentFixture<WithhrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithhrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithhrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
