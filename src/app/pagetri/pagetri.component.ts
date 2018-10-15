import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/produit';
import { ProduitService } from '../common/produit.service';



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

  constructor(private servicegalerie: ProduitService) { }

  ngOnInit() {
    this.tab = this.servicegalerie.get();
  }
  triByCategory(categories) {
    this.tabTri = this.servicegalerie.triByCategory(categories);
  }

}
