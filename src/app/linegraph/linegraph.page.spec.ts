import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinegraphPage } from './linegraph.page';

describe('LinegraphPage', () => {
  let component: LinegraphPage;
  let fixture: ComponentFixture<LinegraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinegraphPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinegraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
