import {Component, Input, OnInit} from '@angular/core';
import {VOProduct} from '@product/models/product.model';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.css']
})
export class ProductPurchaseComponent implements OnInit {

  @Input() product: VOProduct;
  constructor() { }

  ngOnInit() {
  }

}
