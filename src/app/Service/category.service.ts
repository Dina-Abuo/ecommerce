import { Injectable } from '@angular/core';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: ICategory[];
  constructor() {
    this.categories = [
      { id: 1, name: 'Accessories' },
      { id: 2, name: 'Laptops' },
      { id: 3, name: 'Phones' },
    ];
  }

  getAllCategories(): ICategory[] {
    return this.categories;
  }
}
