import { Injectable } from '@angular/core';
import { CartItem } from '../Models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  cardIems: CartItem[] = [];
  constructor() { }
}
