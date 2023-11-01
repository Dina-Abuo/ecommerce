import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/cartItem';
import { AddToCartService } from 'src/app/Service/add-to-cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  value: number = 1;
  cartItems: CartItem[] = [];
  count: number = 0;
  constructor(private addToCartService: AddToCartService) {


  }
  ngOnInit(): void {
    this.count = this.cartItems.length;
    if (localStorage.getItem("cartItems"))
      this.cartItems = JSON.parse(localStorage.getItem("cartItems")!)
  }
  remove(index: number) {
    this.cartItems.splice(index, 1)
    return this.cartItems
  }







  minus(val: any) {
    this.value = +val;
    if (this.value > 1) {
      this.value--;
    }
  }
  plus(val: any) {
    this.value = +val;
    if (this.value < 9) {
      this.value++;
    }
  }
}
