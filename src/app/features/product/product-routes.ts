import {Route, Routes} from '@angular/router';
import {ProductEntryComponent} from '@app/features/product/product-entry/product-entry.component';
import {ProductComponent} from '@app/features/product/product/product.component';



export const productRoutes: Routes = [
  {
    path: 'product', component: ProductEntryComponent
  },
  {path: 'product/:id', component: ProductComponent}

]

