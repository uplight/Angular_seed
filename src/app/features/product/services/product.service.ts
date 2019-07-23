import { Injectable } from '@angular/core';
import {ApiProductsService} from '@app/core/services/apis/api-products.service';
import {BehaviorSubject} from 'rxjs';
import {VOProduct} from '@app/core/models/products';
import {ARRAY} from '@app/utils/array/ARRAY';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products$: BehaviorSubject<{[id: string]: VOProduct}> = new BehaviorSubject(null);
  constructor(
    private apiProduct: ApiProductsService
  ) {
    apiProduct.downloadProducts().subscribe(products => {
      this.products$.next(ARRAY.indexBy(products, 'id'));
    });
  }
}
