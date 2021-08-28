import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalluserComponent } from './listalluser.component';

describe('ListalluserComponent', () => {
  let component: ListalluserComponent;
  let fixture: ComponentFixture<ListalluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListalluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
