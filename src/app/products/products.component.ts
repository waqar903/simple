import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  productName = 'A Book';
  products = ['A Book', 'A Tree'];
  constructor() {}
  addProduct(form: any) {
    // this.products.push(this.productName);
    if (form.value) {
      this.products.push(form.value.productName);
    }
    console.log(form);
  }

  removeProduct(product: string) {
    this.products = this.products.filter((p) => p != product);
  }
}
