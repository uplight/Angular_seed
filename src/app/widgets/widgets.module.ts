import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges/badges.component';
import {MaterialModule} from '@app/material/material.module';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductPromoComponent } from './product-promo/product-promo.component';
import { ProductPurchaseComponent } from './product-purchase/product-purchase.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';


@NgModule({
  exports: [
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
    PipesModule,
    DirectivesModule
  ]
})
export class WidgetsModule { }
