import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DshBaseComponent } from './dsh-base.component';

describe('DshBaseComponent', () => {
  let component: DshBaseComponent;
  let fixture: ComponentFixture<DshBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DshBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DshBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
