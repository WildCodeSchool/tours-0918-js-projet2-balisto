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
  produit: Produit;
  produits: Produit[];

  constructor(private produitservice: ProduitService, public loginService: LoginService) { }


  ngOnInit() {
    this.tab = this.produitservice.get();
    this.produits = this.getFromLocalStorage();
  }

  triByCategory(categories) {
    this.tabTri = this.produitservice.triByCategory(categories);
  }

  deleteProduit(produit: Produit) {
    const index = this.tab.findIndex( x => x.id === produit.id);
    this.tab.splice(index, 1);
  }

  deleteProduittri(produit: Produit) {
    const indextri = this.tabTri.findIndex( x => x.id === produit.id);
    this.tabTri.splice(indextri, 1);
  }

  getFromLocalStorage(): Produit[] {
    const stringData = localStorage.getItem('produit');
    const produits: Produit[] = JSON.parse(stringData);

    return produits;
  }

}
