import { Component, OnInit } from '@angular/core';
import { TriService } from '../tri.service';
import products from '../products';

@Component({
  selector: 'app-pagetri',
  templateUrl: './pagetri.component.html',
  styleUrls: ['./pagetri.component.css']
})
export class PagetriComponent implements OnInit {
  prodTri: any;
  title: boolean;
  products: any;

  constructor(public service: TriService) { }

  ngOnInit() {
    this.products = products;
  }

  triByCategory(category) {
    this.prodTri = this.service.triByCategory(category);
  }
}
