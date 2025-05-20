import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAuthenticationComponent } from './landing-authentication.component';

describe('LandingAuthenticationComponent', () => {
  let component: LandingAuthenticationComponent;
  let fixture: ComponentFixture<LandingAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingAuthenticationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
