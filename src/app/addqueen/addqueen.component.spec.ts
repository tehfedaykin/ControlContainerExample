import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqueenComponent } from './addqueen.component';

describe('AddqueenComponent', () => {
  let component: AddqueenComponent;
  let fixture: ComponentFixture<AddqueenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddqueenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
