import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LndBaseComponent } from './lnd-base.component';

describe('LndBaseComponent', () => {
  let component: LndBaseComponent;
  let fixture: ComponentFixture<LndBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LndBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LndBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
