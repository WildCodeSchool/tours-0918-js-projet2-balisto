import { Component, OnInit } from '@angular/core';
import { TriService } from '../tri.service';
import { Produit } from '../common/produit';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-pagetri',
  templateUrl: './pagetri.component.html',
  styleUrls: ['./pagetri.component.css']
})
export class PagetriComponent implements OnInit {
  prodTri: any;
  title: any;
  products: any;
  page = 1;

  constructor(private service: TriService, public loginService: LoginService) { }

  ngOnInit() {
    this.products =  this.service.products;
  }

  triByCategory(category) {
    this.prodTri = this.service.triByCategory(category);
  }
}
