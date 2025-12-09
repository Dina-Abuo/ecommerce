import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/cartItem';
import { AddToCartService } from 'src/app/Service/add-to-cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private addToCartService: AddToCartService) {}

  ngOnInit(): void {
    if (localStorage.getItem('cartItems')) {
      this.addToCartService.cardItems = JSON.parse(
        localStorage.getItem('cartItems')!
      );
      this.cartItems = this.addToCartService.cardItems;
      this.calculateTotalPrice();
    }
  }

  remove(index: number) {
    this.addToCartService.cardItems.splice(index, 1);
    this.cartItems = this.addToCartService.cardItems;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    // تحديث السعر الكلي بعد الحذف
    this.calculateTotalPrice();
    return this.cartItems;
  }

  minus(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateItemPrice(item);
      // إعادة حساب السعر الكلي
      this.calculateTotalPrice();
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  plus(item: CartItem) {
    if (item.quantity < 9) {
      item.quantity++;
      this.updateItemPrice(item);
      this.calculateTotalPrice();
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  updateItemPrice(item: CartItem) {
    item.totalPrice = item.price * item.quantity;
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
}
