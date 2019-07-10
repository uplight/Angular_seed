import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {VOProduct} from '@product/models/product.model';
import {HighlightedDirective} from '@app/com/directives/highlighted.directive';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, AfterViewInit {

  @ViewChild(HighlightedDirective, {static: true, read: HighlightedDirective})
  highlighted: HighlightedDirective;
  @Input() product: VOProduct;

  constructor() {
  }

  ngOnInit() {
  }

  onOver($event: any) {
    console.log($event);

  }
  ngAfterViewInit(): void {

  }
}
