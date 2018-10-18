import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../common/produit';
import {ProduitService} from 'src/app/common/produit.service';
import { LoginService } from '../common/login.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  tab: Produit[];
  search: any;
  resultat: Produit[];
  page = 1;
  title: string;

  // tslint:disable-next-line:max-line-length
  constructor(private servicegalerie: ProduitService, private route: ActivatedRoute, public loginService: LoginService) {
  }

  ngOnInit() {
    this.tab = this.servicegalerie.get();
    this.route.params.subscribe(params => {
      this.search = params['search'];
      this.resultat = this.servicegalerie.getBySearch(this.search);
    });
  }
}

