import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout';
import { ComponentsModule } from './components/components-module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [Layout],
  imports: [CommonModule, ComponentsModule, RouterModule, MatSidenavModule],
  exports: [Layout],
})
export class LayoutModule {}
