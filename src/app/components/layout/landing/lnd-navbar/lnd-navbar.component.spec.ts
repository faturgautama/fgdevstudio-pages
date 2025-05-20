import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LndNavbarComponent } from './lnd-navbar.component';

describe('LndNavbarComponent', () => {
  let component: LndNavbarComponent;
  let fixture: ComponentFixture<LndNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LndNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LndNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
