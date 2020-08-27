import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KotakComponent } from './kotak.component';

describe('KotakComponent', () => {
  let component: KotakComponent;
  let fixture: ComponentFixture<KotakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KotakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KotakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
