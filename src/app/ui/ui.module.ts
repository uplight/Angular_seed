import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {BadgesComponent} from '@app/ui/badges/badges.component';
import {ProductImageComponent} from '@app/ui/product-image/product-image.component';
import {ProductPromoComponent} from '@app/ui/product-promo/product-promo.component';
import {ProductPurchaseComponent} from '@app/ui/product-purchase/product-purchase.component';
import {ProductInfoComponent} from '@app/ui/product-info/product-info.component';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';
import {MaterialMatModule} from '@app/material/material-mat.module';
import {MaterialSdkModule} from '@app/material/material-sdk.module';
import {MaterialAppModule} from '@app/material/material-app.module';

@NgModule({
  exports: [
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
   MaterialMatModule,
    MaterialSdkModule,
    MaterialAppModule,
    PipesModule,
    DirectivesModule
  ]
})
export class UiModule {
}
