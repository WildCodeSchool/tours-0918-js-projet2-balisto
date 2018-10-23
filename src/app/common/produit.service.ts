import { Injectable } from '@angular/core';
import { Produit } from './produit';
import products from './tableau_produits';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  // déclaration du tableau produits de type Produit
  tab: Produit[];
  tabTri: Produit[];
  produit: any;
  tabComp: Produit[];

  constructor() {
    // Si la clé n'éxiste "produits" pas dans le local storage
    if (!localStorage.products) {
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
      this.saveToLocalStorage(this.tab);
    } else {
      // Si la clé "produits" existe récupération des donnée en conversion
      // en objet javascript (json)
      const data = JSON.parse(localStorage.products);
      // converte data to Produit model
      this.tab = data;
    }
  }

  saveToLocalStorage(produit) {
    const data = JSON.stringify(produit);
    localStorage.setItem('products', data);
  }
  // retourne le tableau des produits
  get(): Produit[] {
    return this.tab;
  }

  // tableau avec id
  getProduitById(id: string) {
    return this.tab.find(produit => produit.id === id);
  }

  // tableau avec categorie
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
  // tableau avec comparateur
  getProduitByName(name: string) {
    return this.tabComp.find(produitComp => produitComp.name === name);
  }

  // tableau search
  getBySearch(search): Produit[] {
    const resultat = [];
    for (let i = 0; i < this.tab.length; i++) {
      if (search.toLowerCase() === this.tab[i].id.toLocaleLowerCase()) {
        resultat.push(this.tab[i]);
      }
      if (search.toLowerCase() === this.tab[i].marque.toLowerCase()) {
        resultat.push(this.tab[i]);
      }
      if (search.toLowerCase() === this.tab[i].name.toLowerCase()) {
        resultat.push(this.tab[i]);
      }
    }
    console.log(resultat);
    return resultat;
  }

  // ajouter produit
  ajouter(produit: Produit) {
    produit.id = this.tab.toString();
    this.tab.push(produit);
    this.saveToLocalStorage(this.tab);
  }

  update(element) {
    const index = this.produit.indexOf(element);
    this.produit[index] = element;
    this.saveToLocalStorage(this.produit);
}

deleteProduit(produit: Produit) {
  const index = this.tab.findIndex( x => x.id === produit.id);
  this.tab.splice(index, 1);
  this.saveToLocalStorage(this.tab);
}

deleteProduittri(produit: Produit) {
  const index = this.tabTri.findIndex( x => x.id === produit.id);
  this.tabTri.splice(index, 1);
}
}



