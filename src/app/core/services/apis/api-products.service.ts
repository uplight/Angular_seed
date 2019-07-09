import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VOProduct} from '@product/models/product.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  downloadProducts(): Observable<VOProduct[]> {
    return this.http.get<{payload}>('/api/products')
      .pipe(
      map(v => v.payload)
    ) as Observable<VOProduct[]>

  }
}
