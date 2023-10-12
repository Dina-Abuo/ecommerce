import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  value: number = 1;
  constructor() {

  }
  ngOnInit(): void {

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
