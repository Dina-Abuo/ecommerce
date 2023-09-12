import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { Discount } from 'src/app/Enums/discount';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  ClientName: string = 'Dina';
  IsPurshased: boolean = true;
  public discountEnum = Discount;
  discount: Discount = Discount.dis1;

  Products: IProduct[];
  storeData: Store = new Store('jumia', ['AA', 'LL', 'OO'], 'https://s23.q4cdn.com/836376591/files/images/irw/jumia-group-logo-new.png')

  constructor() {
    this.Products = [
      { id: 2, name: 'Acer Aspire', price: 300, quantity: 34, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/865344/1.jpg?3599' },
      { id: 3, name: 'Acer ASPIRE 5', price: 343200, quantity: 322, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/706844/1.jpg?2507' },
      { id: 4, name: 'Samsung Galaxy', price: 20000, quantity: 3, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/762534/1.jpg?8696' },
      { id: 5, name: 'XIAOMI Redmi', price: 100, quantity: 1, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/992014/1.jpg?2587' },
      { id: 7, name: 'realme Buds', price: 23400, quantity: 0, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/487204/1.jpg?4244' },
      { id: 9, name: 'Anker Soundcore', price: 98300, quantity: 2, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/841454/1.jpg?8774' }
    ]
  }

  showIamage() {
    this.IsPurshased = !this.IsPurshased
  }

  buy(prdQuantity: number): number {
    if (prdQuantity > 0) {
      prdQuantity -= 1;
    }
    return prdQuantity;
  }

}
