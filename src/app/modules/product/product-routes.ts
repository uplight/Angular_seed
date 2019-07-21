import {Route, Routes} from '@angular/router';
import {ProductEntryComponent} from '@product/product-entry/product-entry.component';
import {ProductComponent} from '@product/product/product.component';


export const productRoutes: Routes = [
  {
    path: 'product', component: ProductEntryComponent
  },
  {path: 'product/:id', component: ProductComponent}

]

