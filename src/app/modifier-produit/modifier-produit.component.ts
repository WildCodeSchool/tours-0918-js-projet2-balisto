import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/produit';
import { ProduitService } from '../common/produit.service';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {

  produit: Produit;
  tab: Produit[];
  produits: Produit[];

  // tslint:disable-next-line:max-line-length
  constructor(private produitService: ProduitService, private activatedRoute: ActivatedRoute, private modalService: NgbModal, public loginService: LoginService) { }

  ngOnInit() {
    this.tab = this.produitService.get();
    this.produits = this.getFromLocalStorage();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProduitById(id);
  }

// Pour mettre à jour un produit (le modifier)
  update() {
    this.produitService.update(this.produit);
  }

// Récupérer les données du localStorage
  getFromLocalStorage(): Produit[] {
    const stringData = localStorage.getItem('produit');
    const produits: Produit[] = JSON.parse(stringData);

    return produits;
  }

// Récupérer l'id d'un produit
getProduitById(id): void {
  this.produit = Object.assign({}, this.produitService.getProduitById(id));
  }

// Ouverture des modals
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
