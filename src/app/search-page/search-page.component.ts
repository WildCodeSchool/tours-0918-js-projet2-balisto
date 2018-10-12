import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import products from '../../products';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  resultat: string;
  products: any[];
  produit: any;
  search: any;
  prods: any[];

  constructor(private route: ActivatedRoute) {
    this.products = products;
   }

  ngOnInit() {

    this.search = this.route.snapshot.params['search'];

    console.log(this.search);

    this.prods = this.getBySearch(this.search);
  }

  getBySearch(search) {
    return products.filter((product) => {
      if (product._id && product._id.toString().includes(search)) {
        return product;
      }
      if (product.brands && product.brands.toString().includes(search)) {
        return product;
      }
      if (product.product_name && product.product_name.toString().includes(search)) {
        return product;
      }

    });
  }
}

