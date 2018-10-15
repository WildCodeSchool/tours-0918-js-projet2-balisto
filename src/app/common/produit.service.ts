import { Injectable } from '@angular/core';
import { Produit } from './produit';
import products from './tableau_produits';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
// déclaration du tableau produits de type Todo
 tab: Produit[];

  constructor() {
// Si la clé n'éxiste "produits" pas dans le local storage
     if (!localStorage.tab) {
// Initialisation du local storage et du tableau produits
    this.tab = products.map((x) => {
      const produit = new Produit();
      produit.id = x['id'];
      produit.name = x['product_name'];
      produit.image = x['image'];
      return produit;
 });
    this.saveToLocalStorage([this.tab]);
     } else {
// Si la clé "produits" existe récupération des donnée en conversion
// en objet javascript (json)
      const data = JSON.parse(localStorage.tab);
// converte data to Produit model
      this.tab = data;
     }
  }

saveToLocalStorage(produit) {
    const data = JSON.stringify(produit);
    localStorage.setItem('produits', data);
  }
// retourne le tableau des produits
get(): Produit[] {
  return this.tab;
  }

// iteration sur tableau avec id
getProduitByID(id: string) {
  return this.tab.find(produit => produit.id ===id);
}
}
