import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronpromptComponent } from './patronprompt.component';

describe('PatronpromptComponent', () => {
  let component: PatronpromptComponent;
  let fixture: ComponentFixture<PatronpromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatronpromptComponent]
    });
    fixture = TestBed.createComponent(PatronpromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
