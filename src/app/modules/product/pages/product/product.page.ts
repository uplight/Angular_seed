import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {PRODUCT_DEFAULT, VOProduct} from '@product/models/product.model';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {DataStoreService} from '@app/core/data-store.service';
import {select, Store} from '@ngrx/store';
import {AppState} from '@app/core/reducers';
import {selectProductById} from '@product/store/product.selectors';
import {AllProductsRequested} from '@product/store/products.actions';


@Component({
  selector: 'product-page',
  templateUrl: 'product.page.html',
  styles: [`
    
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPage implements OnInit, OnChanges, OnDestroy {


  product$: Observable<VOProduct>;
  productId: string;
  @Input() product: VOProduct = PRODUCT_DEFAULT;
  subs: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataStoreService,
    private store: Store<AppState>,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    if (!this.product.title) {
      let sub: Subscription;
      sub = this.route.params.subscribe(params => {
        if (!params.id) {
          return;
        }
        this.productId = params.id;
      })

      this.subs.push(sub);
      sub = this.store.pipe(
        select(selectProductById(this.productId)),
        tap(product => {
          if (!product) {
            this.store.dispatch(new AllProductsRequested())
          } else {

          }
        }),
        filter(v => !!v),
        map(product => Object.assign({}, product))
      ).subscribe(v => {
        this.product = v;
        this.cd.markForCheck();
      });
      this.subs.push(sub);
   }

  /*  sub = combineLatest(this.route.params, this.dataService.products$)
      .pipe(
        map(([params, products]) => {
          const id = params.id || this.productId;
          return products.find(item => item.id === id)
        }),
        filter(v => !!v)
      ).subscribe(product => {
        this.productSub.next(product);
      })
    this.subs.push(sub);*/

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productId = changes.product.currentValue.id;
    // this.productSub.next(changes.product.currentValue);
  }

  ngOnDestroy(): void {
    this.subs.forEach(function (item) {
      item.unsubscribe();
    })
  }

}

