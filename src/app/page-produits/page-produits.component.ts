import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../common/produit';
import { ProduitService } from '../common/produit.service';

@Component({
  selector: 'app-page-produits',
  templateUrl: './page-produits.component.html',
  styleUrls: ['./page-produits.component.css']
})
export class PageProduitsComponent implements OnInit {
  produit: Produit = new Produit();
  constructor(private produitService: ProduitService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.getProduitById(id);
}

  getProduitById(id): void {
    this.produit = this.produitService.getProduitById(id);
    }
}
