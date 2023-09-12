import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  namProduct: string = 'Maxtella Raw Chocolate 150g For Desserts And Cooking Purposes'
  prictProduct: number = 300;
  imgURL: string = 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/756952/1.jpg?9225'
  price() {
    return this.prictProduct;
  }
}
