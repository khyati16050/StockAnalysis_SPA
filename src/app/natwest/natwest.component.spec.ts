import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatwestComponent } from './natwest.component';

describe('NatwestComponent', () => {
  let component: NatwestComponent;
  let fixture: ComponentFixture<NatwestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatwestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatwestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
