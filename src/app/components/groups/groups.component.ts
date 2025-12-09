import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsServiceService } from 'src/app/Service/products-service.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  productOfCatID: IProduct[] = [];
  categoryID: number = 0
  constructor(private ProductFromService: ProductsServiceService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoryID = (this.router.snapshot.paramMap.get('categoryID')) ? Number(
      this.router.snapshot.paramMap.get('categoryID')
    ) : 0
    this.productOfCatID = this.ProductFromService.getProductsByCatI(this.categoryID)    
  }

}
