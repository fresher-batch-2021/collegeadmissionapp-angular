import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfeesComponent } from './viewfees.component';

describe('ViewfeesComponent', () => {
  let component: ViewfeesComponent;
  let fixture: ComponentFixture<ViewfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
