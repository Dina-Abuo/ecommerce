import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductsServiceService } from '../../Service/products-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
import { CartItem as CartItem } from 'src/app/Models/cartItem';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { AddToCartService } from 'src/app/Service/add-to-cart.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  currentProdID: number = 0;
  value: number = 1;
  product?: IProduct;
  prodctID: number = 0;

  constructor(
    private productService: ProductsServiceService,
    private routerActivate: ActivatedRoute,
    private router: Router,
    private location: Location,
    private Cart: AddToCartService,
  ) { }

  ngOnInit(): void {
    this.currentProdID = (this.routerActivate.snapshot.paramMap.get('id')) ? Number(
      this.routerActivate.snapshot.paramMap.get('id')
    ) : 0

    this.product = this.productService.getProductByID(this.currentProdID)

  }

  addToCart(product: IProduct): void {
    let cardItem: CartItem = {
      id: product?.id,
      name: product?.name,
      quantity: product?.quantity,
      price: product?.price,
      img: product?.img,
    }
    let cartItemsJson: CartItem[];
    let cartItemsString = localStorage.getItem("cartItems");

    if (cartItemsString != null) {
      cartItemsJson = JSON.parse(cartItemsString);
      cartItemsJson.push(cardItem);
      localStorage.setItem("cartItems", JSON.stringify(cartItemsJson))
      this.router.navigate(['/cart'])
    }
    else {
      localStorage.setItem("cartItems", JSON.stringify([cardItem]))
    }
  }

  goBack() {
    this.location.back()
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
