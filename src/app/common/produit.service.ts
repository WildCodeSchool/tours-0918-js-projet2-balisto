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
        produit.categories = x['categories'];
        produit.marque = x['brand'];
        produit.quantite = x['quantity'];
        produit.conditionnement = x['packaging'];
        produit.label = x['labels'];
        produit.pays = x['country'];
        produit.ingredients = x['ingredients'];
        produit.allergenes = x['allergenes'];
        produit.nova = x['nova'];
        produit.nutriscore = x['nutriscore'];
        produit.valeure_nutritionnelle = x['nutritional_value'];
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
  getProduitById(id: string) {
    return this.tab.find(produit => produit.id === id);
  }

  triByCategory(categories): Produit[] {
    const tabTri = this.tab.filter(produit => {
      if (produit.categories && produit.categories.includes(categories)) {
        return produit;
      }
    });
    return tabTri;
  }

  triByMarques(marques): Produit[] {
    const tabM = this.tab.filter(produit => {
      if (produit.marque && produit.marque.includes(marques)) {
        return produit;
      }
    });
    return tabM;
  }

  triByNutri(nutriscore): Produit[] {
    const tabNutri = this.tab.filter(produit => {
      if (produit.nutriscore && produit.nutriscore.includes(nutriscore)) {
        return produit;
      }
    });
    return tabNutri;
  }

  triByPays(pays): Produit[] {
    const tabPays = this.tab.filter(produit => {
      if (produit.pays && produit.pays.includes(pays)) {
        return produit;
      }
    });
    return tabPays;
  }

  triByCondi(conditionnement): Produit[] {
    const tabCondi = this.tab.filter(produit => {
      if (produit.conditionnement && produit.conditionnement.includes(conditionnement)) {
        return produit;
      }
    });
    return tabCondi;
  }

  triByAller(allergenes): Produit[] {
    const tabAller = this.tab.filter(produit => {
      if (produit.allergenes && produit.allergenes.includes(allergenes)) {
        return produit;
      }
    });
    return tabAller;
  }

  triReg(str) {
    const regex = new RegExp(str, 'i');
    const tabFinal = this.tab.filter(produit => {
      if (produit.name.match(regex)) {
        return produit;
      } else if (produit.marque && produit.marque.match(regex)) {
        return produit;
      } else if (produit.ingredients && produit.ingredients.match(regex)) {
        return produit;
      } else if (produit.categories && produit.categories.join().match(regex)) {
        return produit;
      } else if (produit.allergenes && produit.allergenes.join().match(regex)) {
        return produit;
      } else if (produit.pays && produit.pays.match(regex)) {
        return produit;
      }
    });
    return tabFinal;
  }
}



