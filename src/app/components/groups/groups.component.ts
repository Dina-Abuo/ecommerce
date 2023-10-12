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
  categroyID: number = 0
  constructor(private ProductFromVerice: ProductsServiceService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categroyID = (this.router.snapshot.paramMap.get('categroyID')) ? Number(
      this.router.snapshot.paramMap.get('categroyID')
    ) : 0
    this.productOfCatID = this.ProductFromVerice.getProductsByCatI(this.categroyID)

  }

}
