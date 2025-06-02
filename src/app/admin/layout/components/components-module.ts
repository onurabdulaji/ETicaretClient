import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [Header, Sidebar, Footer],
  imports: [CommonModule, RouterModule, MatListModule],
  exports: [Header, Sidebar, Footer],
})
export class ComponentsModule {}
