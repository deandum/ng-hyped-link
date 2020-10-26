import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHypedLinkComponent } from './ng-hyped-link.component';

describe('NgHypedLinkComponent', () => {
  let component: NgHypedLinkComponent;
  let fixture: ComponentFixture<NgHypedLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgHypedLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHypedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
