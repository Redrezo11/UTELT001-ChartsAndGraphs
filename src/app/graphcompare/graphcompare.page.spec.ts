import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphcomparePage } from './graphcompare.page';

describe('GraphcomparePage', () => {
  let component: GraphcomparePage;
  let fixture: ComponentFixture<GraphcomparePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphcomparePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphcomparePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
