import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybranchComponent } from './displaybranch.component';

describe('DisplaybranchComponent', () => {
  let component: DisplaybranchComponent;
  let fixture: ComponentFixture<DisplaybranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaybranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
