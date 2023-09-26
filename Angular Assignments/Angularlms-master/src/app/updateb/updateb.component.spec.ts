import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebComponent } from './updateb.component';

describe('UpdatebComponent', () => {
  let component: UpdatebComponent;
  let fixture: ComponentFixture<UpdatebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatebComponent]
    });
    fixture = TestBed.createComponent(UpdatebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
