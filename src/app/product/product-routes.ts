import {Route, Routes} from '@angular/router';
import {ProductEntryComponent} from '@app/product/product-entry/product-entry.component';
import {ProductComponent} from '@app/product/product/product.component';


export const productRoutes: Routes = [
  {
    path: '', component: ProductEntryComponent,
    children: [
      {
        path: ':id', component: ProductComponent
      }
    ]
  }

]

