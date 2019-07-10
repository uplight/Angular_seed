import {Component, OnDestroy} from '@angular/core';
import {DataStoreService} from '@app/core/services/data/data-store.service';
import {Observable, Subscription} from 'rxjs';
import {VOProduct} from '@product/models/product.model';
import {map, tap} from 'rxjs/operators';
import {selectAllProducts} from '@product/store/product.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '@app/core/reducers';
import {AllProductsRequested} from '@product/store/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styles: [`

     
  `]
})
export class ProductsPage implements OnDestroy {
  products$: Observable<VOProduct[]>;

  constructor(
    private my_store: DataStoreService,
    private store: Store<AppState>
  ) {


    this.products$ = this.store
      .select(selectAllProducts)
      .pipe(
        tap(products => {
          console.log(products);
          if (!products.length) {
            this.store.dispatch(new AllProductsRequested())
          }
        })
      );    /*store.products$.pipe(map(products => {
      return products;
    }));*/
  }

  ngOnDestroy(): void {
  }

}
