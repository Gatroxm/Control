import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucometriasComponent } from './glucometrias.component';

describe('GlucometriasComponent', () => {
  let component: GlucometriasComponent;
  let fixture: ComponentFixture<GlucometriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlucometriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucometriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
