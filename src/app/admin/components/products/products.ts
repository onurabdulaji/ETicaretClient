import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerTypes } from '../../../base/base';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client';
import { Product } from '../../../contracts/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerTypes.BallAtom);
    this.httpClientService
      .get<Product[]>({
        controller: 'products',
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
