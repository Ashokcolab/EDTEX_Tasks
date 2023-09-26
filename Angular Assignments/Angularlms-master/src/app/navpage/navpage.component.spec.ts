import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpageComponent } from './navpage.component';

describe('NavpageComponent', () => {
  let component: NavpageComponent;
  let fixture: ComponentFixture<NavpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavpageComponent]
    });
    fixture = TestBed.createComponent(NavpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
