import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Create } from './create/create';
import { List } from './list/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [Products, Create, List],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Products }]),
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class ProductsModule {}
