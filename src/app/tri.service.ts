import { Injectable } from '@angular/core';
import { filterQueryId } from '@angular/core/src/view/util';

@Injectable({
  providedIn: 'root'
})
export class TriService {
  constructor() { }
  OnInit(): void {
    /*const dataOPFF = JSON.parse(localStorage.getItem('products'));
    function listCat() {
      const cat = dataOPFF.filter(#);
      return cat;
    }*/
    function triMarque(category) {
      return category.marque;
    }
  }
}
