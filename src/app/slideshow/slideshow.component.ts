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
  tab: any;

  constructor(public loginService: LoginService, private modalService: NgbModal, public produitservice: ProduitService) { }


  ngOnInit() {
    this.product = this.getProduitById('21');
    console.log(this.product);



  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then((result) => {
        this.produitservice.saveSlideShow(this.product);
      });
  }



  getProduitById(id) {
    this.product = this.produitservice.getProduitById(id);
  }
}
