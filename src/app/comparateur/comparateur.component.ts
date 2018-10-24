import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../common/produit';
import { Nutrients } from '../common/nutrients';
import { ProduitService } from '../common/produit.service';

@Component({
  selector: 'app-comparateur',
  templateUrl: './comparateur.component.html',
  styleUrls: ['./comparateur.component.css']
})
export class ComparateurComponent implements OnInit {
  tab: Produit[];
  produitA: Produit = new Produit();
  produitB: Produit = new Produit();
  search: string;

  constructor(private produitService: ProduitService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProduitA(id);
    this.tab = this.produitService.get();
    this.search = '';
    this.produitB.nutrients = new Nutrients();
  }

  getProduitA(id): void {
    this.produitA = this.produitService.getProduitById(id);
  }

  getProduitB(id): void {
    this.produitB = this.produitService.getProduitById(id);
  }
  // recherche comparateur
  rechercheComp() {
    for (let i = 0; i < this.tab.length; i++) {
      if (this.tab[i].name && this.tab[i].name.toLowerCase() === this.search.toLowerCase()) {
        this.produitB = this.tab[i];
      }
    }
  }
}
