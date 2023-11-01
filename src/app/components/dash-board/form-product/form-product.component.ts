import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  //@ts-ignore
  productFrom: FormGroup;
  productID: string | null = null;
  buttonText: string = 'Create Product'
  constructor(private FormBiulder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.createProductFrom();
    if (this.activatedRoute.snapshot.paramMap.get('productID')) {
      this.productID = this.activatedRoute.snapshot.paramMap.get('productID');
      // if (this.productID != null) {
      //   this.loadBroductDetails(this.productID)
      // }
    }
  }

  createProductFrom() {
    this.productFrom = this.FormBiulder.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      'description': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
      'price': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(8)])]
    })
  }

  // createproduct(values: any) {
  //   let FromData = new FormData;
  //   FromData.append('name', values.name);
  //   FromData.append('price', values.price);
  //   FromData.append('description', values.description);
  //   if (this.productID) {
  //     FromData.append('id', this.productID);
  //     this.crudServer.updateProuductDetails(FromData).subscribe(res => {
  //       if (res.result == 'success') {
  //         this.navigateTo('/crud/products');
  //       }
  //     })
  //   }
  //   else {
  //     this.crudServer.createProuduct(FromData).subscribe(res => {
  //       if (res.result == 'success') {
  //         this.navigateTo('/crud/products');
  //       }
  //     })
  //   }
  // }

  // loadBroductDetails(productID: any) {
  //   this.buttonText = 'Uodate Product';
    // this.crudServer.loadProductInfo(productID).subscribe(res => {
    //   this.productFrom.controls['name'].setValue(res.p_name);
    //   this.productFrom.controls['price'].setValue(res.p_price);
    //   this.productFrom.controls['description'].setValue(res.p_description);
    // })
  // }
  // navigateTo(router: string) {
  //   this.router.navigate([router]);
  // }

}


