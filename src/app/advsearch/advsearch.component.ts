import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../common/produit.service';
import { Produit } from '../common/produit';
import products from 'src/app/common/tableau_produits';

@Component({
  selector: 'app-advsearch',
  templateUrl: './advsearch.component.html',
  styleUrls: ['./advsearch.component.css']
})
export class AdvsearchComponent implements OnInit {

  tabM: Produit[];
  tabNutri: Produit[];
  tabPays: Produit[];
  tabCondi: Produit[];
  tabAller: Produit[];
  tabFinal: Produit[];
  isCollapsed = true;

  constructor(private servicegalerie: ProduitService) { }

  ngOnInit() {
  }

  triByMarques(marques) {
    this.tabM = this.servicegalerie.triByMarques(marques);
  }

  triByNutri(nutriscore) {
    this.tabNutri = this.servicegalerie.triByNutri(nutriscore);
  }

  triByPays(pays) {
    this.tabPays = this.servicegalerie.triByPays(pays);
  }

  triByCondi(conditionnement) {
    this.tabCondi = this.servicegalerie.triByCondi(conditionnement);
  }

  triByAller(allergenes) {
    this.tabAller = this.servicegalerie.triByAller(allergenes);
  }

  triFinal(tabFinal) {
    this.tabFinal = this.tabM.concat(this.tabNutri, this.tabPays, this.tabCondi, this.tabAller);
  }
}
