import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import products from '/home/stark/Bureau/Projet_2/tours-0918-js-projet2-balisto/src/products.ts';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, search: string) {
   }
  resultat: string;
  search = this.route.snapshot.params['search'];

  ngOnInit() {
    console.log(this.route.snapshot.params['search']);
  }
}
