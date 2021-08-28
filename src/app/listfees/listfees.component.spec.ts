import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfeesComponent } from './listfees.component';

describe('ListfeesComponent', () => {
  let component: ListfeesComponent;
  let fixture: ComponentFixture<ListfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
