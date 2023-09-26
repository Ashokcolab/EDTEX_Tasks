import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowpromptComponent } from './borrowprompt.component';

describe('BorrowpromptComponent', () => {
  let component: BorrowpromptComponent;
  let fixture: ComponentFixture<BorrowpromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowpromptComponent]
    });
    fixture = TestBed.createComponent(BorrowpromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
