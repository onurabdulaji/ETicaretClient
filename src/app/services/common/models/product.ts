import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client';
import { Create_Product } from '../../../contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from '../../../contracts/list-product';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) {}

  create(
    product: Create_Product,
    successCalback?: () => void,
    errorCallback?: (errorMessage: string) => void
  ) {
    this.httpClientService
      .post(
        {
          controller: 'products',
        },
        product
      )
      .subscribe((result) => {
        successCalback();
      }),
      (errorResponse: HttpErrorResponse) => {
        const _error: Array<{ key: string; value: Array<string> }> =
          errorResponse.error;
        let message: string = '';
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        errorCallback(message);
      };
  }

  async read(
    page: number = 0,
    size: number = 5,
    successCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<{ totalCount: number; products: List_Product[] }> {
    const promiseData: Promise<{
      totalCount: number;
      products: List_Product[];
    }> = this.httpClientService
      .get<{ totalCount: number; products: List_Product[] }>({
        controller: 'products',
        queryString: `page=${page}&size=${size}`,
      })
      .toPromise();

    promiseData
      .then((d) => successCallBack())
      .catch((errorResponse: HttpErrorResponse) =>
        errorCallBack(errorResponse.message)
      );

    return await promiseData;
  }
}
