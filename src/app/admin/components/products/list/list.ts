import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list-product';
import { ProductService } from '../../../../services/common/models/product';
import { BaseComponent, SpinnerTypes } from '../../../../base/base';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  AlertifyService,
  MessageTypes,
  Positions,
} from '../../../../services/admin/alertify';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private productService: ProductService,
    private alertifyService: AlertifyService
  ) {
    super(spinner);
  }

  displayedColumns: string[] = [
    'name',
    'stock',
    'price',
    'createdDate',
    'updatedDate',
  ];
  dataSource: MatTableDataSource<List_Product> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts() {
    this.showSpinner(SpinnerTypes.BallAtom);
    const allProduct: { totalCount: number; products: List_Product[] } =
      await this.productService.read(
        this.paginator ? this.paginator.pageIndex : 0,
        this.paginator ? this.paginator.pageSize : 5,
        () => this.hideSpinner(SpinnerTypes.BallAtom),
        (errorMessage) =>
          this.alertifyService.message(errorMessage, {
            dismissOthers: true,
            position: Positions.TopRight,
            messageType: MessageTypes.Error,
          })
      );
    this.dataSource = new MatTableDataSource<List_Product>(allProduct.products);
    this.paginator.length = allProduct.totalCount;
  }

  async pageChanged() {
    await this.getProducts();
  }

  async ngOnInit() {
    await this.getProducts();
  }
}
