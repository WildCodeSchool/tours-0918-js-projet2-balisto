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
