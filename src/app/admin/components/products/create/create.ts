import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerTypes } from '../../../../base/base';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  AlertifyService,
  MessageTypes,
  Positions,
} from '../../../../services/admin/alertify';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private productService: ProductService,
    private alertify: AlertifyService
  ) {
    super(spinner);
  }
  ngOnInit(): void {}

  create(
    name: HTMLInputElement,
    stock: HTMLInputElement,
    price: HTMLInputElement
  ) {
    this.showSpinner(SpinnerTypes.BallAtom);
    const createProduct: Create_Product = new Create_Product();
    createProduct.name = name.value;
    createProduct.stock = parseInt(stock.value);
    createProduct.price = parseFloat(price.value);

    this.productService.create(createProduct, () => {
      this.hideSpinner(SpinnerTypes.BallAtom);
      this.alertify.message('Product created successfully!', {
        dismissOthers: true,
        messageType: MessageTypes.Success,
        position: Positions.TopRight,
      });
    });
  }
}
