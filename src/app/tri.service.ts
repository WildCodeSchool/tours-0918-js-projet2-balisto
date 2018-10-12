import { Injectable } from '@angular/core';
import products from './products';

@Injectable({
  providedIn: 'root'
})
export class TriService {
  products: any[];
  constructor() {
    this.products = products;
  }
  triByCategory(category): any[] {
    const prodTri = products.filter(product => {
      if (product.categories && product.categories.toLowerCase().split(',').includes(category.toLowerCase())) {
        return product;
      }
    });
    return prodTri;
  }
}
