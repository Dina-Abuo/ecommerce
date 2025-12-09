import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductsServiceService } from 'src/app/Service/products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productOfCatID: IProduct[] = [];
  category: ICategory[] = [];
  products: IProduct[] = [];
  categoryID: number = 0;
  constructor(
    private categoryService: CategoryService,
    private productsService: ProductsServiceService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.categoryID = this.router.snapshot.paramMap.get('categoryID')
      ? Number(this.router.snapshot.paramMap.get('categoryID'))
      : 0;
    this.productOfCatID = this.productsService.getProductsByCatI(
      this.categoryID
    );

    this.category = this.categoryService.getAllCategories();
    for (let cat of this.category) {
      this.productOfCatID = this.productsService
        .getProductsByCatI(cat.id)
        .slice(0, 5);
      for (let i = 0; i < this.productOfCatID.length; ++i) {
        this.products.push(this.productOfCatID[i]);
      }
    }
  }
}
