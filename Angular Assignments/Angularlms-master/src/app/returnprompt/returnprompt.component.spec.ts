import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnpromptComponent } from './returnprompt.component';

describe('ReturnpromptComponent', () => {
  let component: ReturnpromptComponent;
  let fixture: ComponentFixture<ReturnpromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnpromptComponent]
    });
    fixture = TestBed.createComponent(ReturnpromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
