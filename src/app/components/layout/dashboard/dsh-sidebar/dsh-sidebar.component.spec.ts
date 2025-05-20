import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DshSidebarComponent } from './dsh-sidebar.component';

describe('DshSidebarComponent', () => {
  let component: DshSidebarComponent;
  let fixture: ComponentFixture<DshSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DshSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DshSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
