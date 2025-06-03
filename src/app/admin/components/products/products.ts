import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerTypes } from '../../../base/base';
import { NgxSpinnerService } from 'ngx-spinner';
import { Create_Product } from '../../../contracts/create_product';
import { List } from './list/list';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerTypes.BallAtom);
  }

  @ViewChild(List) listComponents: List;
  createdProduct(createdProduct: Create_Product) {
    this.listComponents.getProducts();
  }
}
