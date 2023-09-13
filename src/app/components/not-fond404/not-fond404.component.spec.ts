import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFond404Component } from './not-fond404.component';

describe('NotFond404Component', () => {
  let component: NotFond404Component;
  let fixture: ComponentFixture<NotFond404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFond404Component]
    });
    fixture = TestBed.createComponent(NotFond404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
