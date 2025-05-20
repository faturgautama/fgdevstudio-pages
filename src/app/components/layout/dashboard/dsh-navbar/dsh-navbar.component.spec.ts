import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DshNavbarComponent } from './dsh-navbar.component';

describe('DshNavbarComponent', () => {
  let component: DshNavbarComponent;
  let fixture: ComponentFixture<DshNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DshNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DshNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
