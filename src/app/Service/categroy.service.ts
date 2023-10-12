import { Injectable } from '@angular/core';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategroyService {
  private categroies: ICategory[];
  constructor() {
    this.categroies = [
      { id: 1, name: 'Accessories' },
      { id: 2, name: 'Laptops' },
      { id: 3, name: 'Phones' }
    ];
  }

  getAllCategroies(): ICategory[] {
    return this.categroies
  }



}
