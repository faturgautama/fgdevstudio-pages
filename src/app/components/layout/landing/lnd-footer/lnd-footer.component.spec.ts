import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LndFooterComponent } from './lnd-footer.component';

describe('LndFooterComponent', () => {
  let component: LndFooterComponent;
  let fixture: ComponentFixture<LndFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LndFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LndFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
