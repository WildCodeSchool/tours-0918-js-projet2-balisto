import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/produit';
import { ProduitService } from '../common/produit.service';
import { LoginService } from '../common/login.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  closeResult: string;

  constructor(private produitservice: ProduitService, public loginService: LoginService, private modalService: NgbModal) { }


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
    this.saveToLocalStorage(this.tab);
  }

  deleteProduittri(produit: Produit) {
    const index = this.tabTri.findIndex( x => x.id === produit.id);
    this.tabTri.splice(index, 1);
    this.saveToLocalStorage(this.tabTri);
  }

  saveToLocalStorage(produit) {
    const data = JSON.stringify(produit);
    localStorage.setItem('products', data);
  }

  getFromLocalStorage(): Produit[] {
    const stringData = localStorage.getItem('produit');
    const produits: Produit[] = JSON.parse(stringData);

    return produits;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.deleteProduittri(result);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open2(content2) {
    this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.deleteProduit(result);
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
      return  `with: ${reason}`;
    }
  }

}
