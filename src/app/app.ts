import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ETicaretClient';
  constructor() {}
}

$.get('https://localhost:7253/api/products', (data) => {
  console.log(data);
});
