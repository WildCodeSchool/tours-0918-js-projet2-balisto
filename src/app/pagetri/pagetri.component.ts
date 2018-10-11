import { Component, OnInit } from '@angular/core';
import products from '../products';


@Component({
  selector: 'app-pagetri',
  templateUrl: './pagetri.component.html',
  styleUrls: ['./pagetri.component.css']
})
export class PagetriComponent implements OnInit {

  products: any;
  prodTri: any[];
  constructor() { }

  ngOnInit() {
    this.products = products;
  }
  triByCategory(category) {
    this.prodTri = products.filter(product => {
      if (product.categories && product.categories.toLowerCase().split(',').includes(category.toLowerCase())) {
        return product;
      }
    });
  }
}
