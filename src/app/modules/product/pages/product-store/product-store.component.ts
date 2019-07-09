import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AppState} from '@app/core/reducers';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {selectProductById} from '@product/store/product.selectors';
import {filter, map, startWith, take, tap} from 'rxjs/operators';
import {AllProductsRequested} from '@product/store/products.actions';
import {fromEvent, observable, Observable, Subject} from 'rxjs';
import {PRODUCT_DEFAULT, VOProduct} from '@product/models/product.model';
import {MatCheckbox, MatCheckboxChange} from '@angular/material';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html'
})
export class ProductStoreComponent implements OnInit, AfterViewInit {

  @ViewChild('compareCheck', {static: false}) set content(content: MatCheckbox) {
    if (content) {
      content.change.subscribe(v => this.checked$.next(v.checked));
    } else {
      this.checked$.next(false);
    }
  }

  checked$: Subject<boolean> = new Subject();
  product$: Observable<VOProduct>;
  product: VOProduct = PRODUCT_DEFAULT;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }
  ngOnInit() {

    this.checked$.subscribe(console.warn);
    const productId = this.route.snapshot.params['id'];
    this.store.pipe(
      select(selectProductById(productId)),
      tap(product => {
        if (!product) {
          this.store.dispatch(new AllProductsRequested())
        } else {

        }
      }),
      filter(v => !!v),
      map(product => Object.assign({}, product))
    ).subscribe(p => this.product = p)
  }

  ngAfterViewInit(): void {


    /* fromEvent(this.compareCheck.nativeElement, 'checked')
       .subscribe(console.log);*/
  }
}
