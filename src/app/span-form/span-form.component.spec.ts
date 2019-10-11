import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanFormComponent } from './span-form.component';

describe('SpanFormComponent', () => {
  let component: SpanFormComponent;
  let fixture: ComponentFixture<SpanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
