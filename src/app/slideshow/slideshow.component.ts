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
    image: `http://www.minot-brasserie.fr/wp-content/uploads/2015/03/biere-minotte-france-marseille-site.jpg`,
    },
    {
    nom: 'Balisto raisins et noisettes',
    image: `https://howandwhatiliketoeat.files.wordpress.com/2014/11/pringles01.jpg`,
    },
    {
    nom: 'Balisto fruits des bois',
    image: `https://i1.wp.com/www.usmagazine.com/wp-content/uploads/2018/02/doritos1.jpg?crop=0px%2C999px%2C1219px%2C690px&resize=1200%2C675&ssl=1`
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
