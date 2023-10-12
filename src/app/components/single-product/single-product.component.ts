import { Component } from '@angular/core';
import { ProductsServiceService } from '../../Service/products-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  currentProdID: number = 0;
  value: number = 1;
  product: IProduct | undefined = undefined;
  prodctID: number = 0;
  constructor(
    private productService: ProductsServiceService,
    private routerActivate: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.currentProdID = (this.routerActivate.snapshot.paramMap.get('id')) ? Number(
      this.routerActivate.snapshot.paramMap.get('id')
    ) : 0

    this.product = this.productService.getProductByID(this.currentProdID)

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
