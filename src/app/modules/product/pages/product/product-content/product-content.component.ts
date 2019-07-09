import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {VOProduct} from '@product/models/product.model';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent implements OnInit {

  @Input() product: VOProduct;
  @Input() noImageTpl: TemplateRef<any>;
  @Input() myIndex: number;

  constructor() { }

  ngOnInit() {

  }

}
