import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnstartComponent } from './unstart.component';

describe('UnstartComponent', () => {
  let component: UnstartComponent;
  let fixture: ComponentFixture<UnstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnstartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
