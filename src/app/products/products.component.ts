import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  productName = 'A Book';
  products = ['A Book', 'A Tree'];
  constructor() {}
  addProduct() {
    this.products.push(this.productName);
  }
  removeProduct(product: string) {
    this.products = this.products.filter((p) => p != product);
  }
}
