import {Injectable} from '@angular/core';
import {ApiProductsService} from '@app/core/services/apis/api-products.service';
import {BehaviorSubject, noop, Observable} from 'rxjs';

import {map} from 'rxjs/operators';
import {VOProduct} from '@app/core/models/products';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  currentProduct$: Observable<VOProduct>;
  products$: BehaviorSubject<VOProduct[]> = new BehaviorSubject([]);
  productId: string;

  constructor(
    private apiProducts: ApiProductsService
  ) {
    this.loadProducts();
    this.currentProduct$ = this.products$.pipe(map(products => products.find( (item) => {
      return item.id === this.productId
    })))
  }

  loadProducts() {
    this.apiProducts.downloadProducts().pipe(map((products: VOProduct[]) => {
      products.forEach(function (item) {
        item.imageUrl = 'assets/images/products/' + item.imageUrl;
      });
      this.products$.next(products as VOProduct[])
    })).subscribe(noop);
  }

  getProductById(id: any) {
    this.productId = id;
  }
}
