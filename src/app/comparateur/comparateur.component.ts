import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../common/produit';
import { ProduitService } from '../common/produit.service';

@Component({
  selector: 'app-comparateur',
  templateUrl: './comparateur.component.html',
  styleUrls: ['./comparateur.component.css']
})
export class ComparateurComponent implements OnInit {
  tabComp: Produit[];
  produitA: Produit = new Produit();
  produitB: Produit = new Produit();

  constructor(private produitService: ProduitService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProduitA(id);
    this.tabComp = this.produitService.get();
  }
  getProduitA(id): void {
    this.produitA = this.produitService.getProduitById(id);
  }
  getProduitB(id): void {
    this.produitB = this.produitService.getProduitById(id);
  }
}
