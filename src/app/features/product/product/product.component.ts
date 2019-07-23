import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '@product/services/product.service';
import {VOProduct} from '@app/core/models/products';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class ProductComponent implements OnInit {

  state = 'default';
  product: VOProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const productId = this.route.snapshot.params.id;
    this.productService.products$.subscribe(products => {
      if (!products) { return; }
      this.product = products[productId];
      console.log(this.product);
    })


  }

  onRefreshClick() {
    this.state = 'rotated';

  }
}
