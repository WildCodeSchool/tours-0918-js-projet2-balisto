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
  products: any;
  prodTri: any[];
  product_name: any;
  produit: any;
  search: any;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.products = products;
    this.search = this.route.snapshot.params['search'];

    console.log(this.search);

    this.getById(this.search);
  }

  getById(id) {
    this.produit = this.products.find(x => x._id == id);
  }

  }

