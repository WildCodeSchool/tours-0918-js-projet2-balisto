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
  closeResult: string;

  // tslint:disable-next-line:max-line-length
  constructor(private produitService: ProduitService, private activatedRoute: ActivatedRoute, private modalService: NgbModal, public loginService: LoginService) { }

  ngOnInit() {
    this.tab = this.produitService.get();
    this.produits = this.getFromLocalStorage();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProduitById(id);
  }

  update() {
    this.produitService.update(this.produit);
  }

  getFromLocalStorage(): Produit[] {
    const stringData = localStorage.getItem('produit');
    const produits: Produit[] = JSON.parse(stringData);

    return produits;
  }

  getProduitById(id): void {
    this.produit = this.produitService.getProduitById(id);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.update();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
