import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPromoComponent } from './product-promo.component';

describe('ProductPromoComponent', () => {
  let component: ProductPromoComponent;
  let fixture: ComponentFixture<ProductPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
