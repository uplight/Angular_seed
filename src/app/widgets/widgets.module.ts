import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges/badges.component';
import {MaterialModule} from '@app/material/material.module';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductPromoComponent } from './product-promo/product-promo.component';
import { ProductPurchaseComponent } from './product-purchase/product-purchase.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  exports: [
    SharedModule,
    MaterialModule,
    BadgesComponent,
    ProductImageComponent,
    ProductPromoComponent,
    ProductPurchaseComponent,
    ProductInfoComponent
  ],
  declarations: [
    BadgesComponent,
    ProductImageComponent,
    ProductPromoComponent,
    ProductPurchaseComponent,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class WidgetsModule { }
