import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private Products: IProduct[];
  constructor() {
    this.Products = [
      { id: 1, name: 'Acer Aspire', price: 300, quantity: 34, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/865344/1.jpg?3599' },
      { id: 2, name: 'Acer ASPIRE 5', price: 343200, quantity: 322, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/706844/1.jpg?2507' },
      { id: 3, name: 'Samsung Galaxy', price: 20000, quantity: 3, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/762534/1.jpg?8696' },
      { id: 4, name: 'XIAOMI Redmi', price: 100, quantity: 1, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/992014/1.jpg?2587' },
      { id: 5, name: 'realme Buds', price: 23400, quantity: 0, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/487204/1.jpg?4244' },
      { id: 6, name: 'Anker Soundcore', price: 98300, quantity: 2, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/841454/1.jpg?8774' },
      { id: 7, name: 'Kady Girls Heather', price: 300, quantity: 34, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/611081/1.jpg?6952' },
      { id: 8, name: 'Acer ASPIRE 5', price: 343200, quantity: 322, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/761722/1.jpg?1906' },
      { id: 9, name: 'Samsung Galaxy', price: 20000, quantity: 3, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/566574/1.jpg?8084' },
      { id: 10, name: 'American Eagle Flex', price: 100, quantity: 1, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/761722/1.jpg?5787' },
      { id: 11, name: 'Star Men Formal', price: 23400, quantity: 0, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/391242/1.jpg?9286' },
      { id: 12, name: 'Anker Soundcore', price: 98300, quantity: 2, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/457034/1.jpg?0895' },
      { id: 13, name: 'Acer Aspire', price: 300, quantity: 34, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/253372/1.jpg?5165' },
      { id: 14, name: 'Acer ASPIRE 5', price: 343200, quantity: 322, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/491004/1.jpg?3665' },
      { id: 15, name: 'Samsung Galaxy', price: 20000, quantity: 3, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/836052/1.jpg?1091' },
      { id: 16, name: 'XIAOMI Redmi', price: 100, quantity: 1, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/836052/1.jpg?0778' },
      { id: 17, name: 'realme Buds', price: 23400, quantity: 0, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/035671/1.jpg?8292' },
      { id: 18, name: 'Anker Soundcore', price: 98300, quantity: 2, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/556422/1.jpg?2581' },
      { id: 19, name: 'Tank Pro Filter', price: 300, quantity: 34, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/128272/1.jpg?6437' },
      { id: 20, name: 'Mini Bar Refrigerator', price: 343200, quantity: 322, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/498782/1.jpg?2530' },
      { id: 21, name: 'Philips XL Essential', price: 20000, quantity: 3, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/134573/1.jpg?8559' },
      { id: 22, name: 'Gas Cooker', price: 100, quantity: 5, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/453063/1.jpg?4591' },
      { id: 23, name: 'Water Dispenser', price: 23400, quantity: 0, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/512693/1.jpg?2013' },
      { id: 24, name: 'Hand blender ', price: 98300, quantity: 52, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/2751/4.jpg?4855' },
      { id: 25, name: 'Acer Aspire', price: 300, quantity: 34, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/688454/1.jpg?9359' },
      { id: 26, name: 'Acer ASPIRE 5', price: 343200, quantity: 322, cateogryID: 1, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/205032/1.jpg?4434 ' },
      { id: 27, name: 'Samsung Galaxy', price: 20000, quantity: 3, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/758072/1.jpg?0711' },
      { id: 28, name: 'XIAOMI Redmi', price: 100, quantity: 1, cateogryID: 2, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/545084/1.jpg?2086' },
      { id: 29, name: 'realme Buds', price: 23400, quantity: 0, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/510484/1.jpg?1231' },
      { id: 30, name: 'Anker Soundcore', price: 98300, quantity: 2, cateogryID: 3, img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/613084/1.jpg?3303' },
    ];
  }


  getAllOfProduct(): IProduct[] {
    return this.Products
  }

  getProductsByCatI(catID: number): IProduct[] {
    if (catID == 0)
      return this.Products
    else {
      return this.Products.filter(prd => prd.cateogryID == catID)
    }
  }

  getProductByID(prodID: number): IProduct | undefined {
    return this.Products.find((prd) => prd.id == prodID)
  }

  getPrdIDs(): number[] {
    let prodIDs: number[] = this.Products.map(prd => prd.id)
    return prodIDs;
  }

}
