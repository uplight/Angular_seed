import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '@product/services/product.service';
import {VOProduct} from '@app/core/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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

}
