import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManajemenProdukComponent } from './manajemen-produk.component';

describe('ManajemenProdukComponent', () => {
  let component: ManajemenProdukComponent;
  let fixture: ComponentFixture<ManajemenProdukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManajemenProdukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManajemenProdukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
