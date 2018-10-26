import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProduitService } from 'src/app/common/produit.service';
import { Produit } from '../common/produit';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  product: any;
  products: any;
  closeResult: string;
  search: any;

  constructor(public loginService: LoginService, private modalService: NgbModal, public produitService: ProduitService) { }


  ngOnInit() {
    this.product = this.getProduitById(1);


  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then((result) => {
        this.produitService.saveSlideShow(this.product);
      })
      .catch(error => {
      });
  }


  getFromLocalStorage(): Produit[] {
    const stringData = localStorage.getItem('produit');
    const produits: Produit[] = JSON.parse(stringData);

    return produits;
  }

getProduitById(id): void {
  this.product = Object.assign({}, this.produitService.getProduitById(id));
  console.log(this.product);
  }}
