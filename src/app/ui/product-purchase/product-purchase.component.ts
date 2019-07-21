import {Component, Input, OnInit} from '@angular/core';
import {VOProduct} from '@app/core/models/products';

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
