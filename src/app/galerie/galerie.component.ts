import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/produit';
import { ProduitService } from '../common/produit.service';
import { LoginService } from '../common/login.service';


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

// liste des produits à afficher
tab: Produit[];
page = 1;

  constructor(private servicegalerie: ProduitService, public loginService: LoginService) { }


  ngOnInit() {
    this.tab = this.servicegalerie.get();
  }

}
