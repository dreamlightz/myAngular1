import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unstart2Component } from './unstart2.component';

describe('Unstart2Component', () => {
  let component: Unstart2Component;
  let fixture: ComponentFixture<Unstart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Unstart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Unstart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
