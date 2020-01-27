import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativePage } from './comparative.page';

describe('ComparativePage', () => {
  let component: ComparativePage;
  let fixture: ComponentFixture<ComparativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
