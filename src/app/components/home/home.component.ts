import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategroyService } from 'src/app/Service/categroy.service';
import { ProductsServiceService } from 'src/app/Service/products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productOfCatID: IProduct[] = [];
  categroy: ICategory[] = [];
  products: IProduct[] = [];
  categroyID: number = 0
  constructor(private categroyService: CategroyService, private productsService: ProductsServiceService, private router: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.categroyID = (this.router.snapshot.paramMap.get('categroyID')) ? Number(
      this.router.snapshot.paramMap.get('categroyID')
    ) : 0
    this.productOfCatID = this.productsService.getProductsByCatI(this.categroyID)

    this.categroy = this.categroyService.getAllCategroies();
    for (let cat of this.categroy) {
      this.productOfCatID = this.productsService.getProductsByCatI(cat.id).slice(0, 5);
      for (let i = 0; i < this.productOfCatID.length; ++i) {
        this.products.push(this.productOfCatID[i])
      }
    }
  }





}
