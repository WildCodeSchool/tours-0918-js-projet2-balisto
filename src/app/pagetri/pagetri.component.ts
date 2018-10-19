import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/produit';
import { ProduitService } from '../common/produit.service';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-pagetri',
  templateUrl: './pagetri.component.html',
  styleUrls: ['./pagetri.component.css']
})
export class PagetriComponent implements OnInit {

  tab: Produit[];
  tabTri: Produit[];
  page = 1;
  title: string;

  constructor(private produitservice: ProduitService, public loginService: LoginService) { }


  ngOnInit() {
    this.tab = this.produitservice.get();
  }

  triByCategory(categories) {
    this.tabTri = this.produitservice.triByCategory(categories);
  }
}
