import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProduitService } from 'src/app/common/produit.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  products: { 'nom': string, 'image': string }[];
  closeResult: string;

  constructor(public loginService: LoginService, private modalService: NgbModal, public produitService: ProduitService) { }


  ngOnInit() {
    this.products = [{
      nom: 'Balisto',
      image: `https://static.openfoodfacts.org/images/products/500/015/941/9291/front_fr.26.full.jpg`,
    },
    {
      nom: 'Balisto raisins et noisettes',
      image: `https://static.openfoodfacts.org/images/products/500/015/941/8546/front_fr.6.full.jpg`,
    },
    {
      nom: 'Balisto fruits des bois',
      image: `https://static.openfoodfacts.org/images/products/500/015/941/8003/front_fr.22.full.jpg`,
    }];

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then((result) => {
        this.produitService.saveSlideShow(this.products);
      })
      .catch(error => {
        // fix me
      });
  }
}


