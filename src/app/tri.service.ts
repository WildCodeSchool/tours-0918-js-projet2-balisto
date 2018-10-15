import { Injectable } from '@angular/core';
import products from './common/tableau_produits';

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
      if (product.categories && product.categories.includes(category)) {
        return product;
      }
    });
    return prodTri;
  }
}
