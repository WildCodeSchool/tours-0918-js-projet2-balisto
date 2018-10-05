import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  products: { 'nom': string, 'image': string} [];

  constructor() { }


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
}
