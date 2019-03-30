import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() { 

    this.products = [
      { id: '1', name: 'Car', price: 50000  },
      { id: '2', name: 'Pen', price: 100 },
      { id: '3', name: 'Pencil', price: 30 }
  ];

  }
  findAll(): Product[] {
    return this.products;
}

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
}
  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
            return i;
        }
    }
    return -1;
  }
}
