import { Component, Input, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {


  @ViewChild('nav') slider !: NgImageSliderComponent;

  imgCollection: Array<object> = [
    {
      image: '',
      thumbImage: 'assets/slider1.webp',
      alt: 'Image 1'
    }, {
      image: '',
      thumbImage: 'assets/slider2.jpg',
      alt: 'Image 2'
    }, {
      image: '',
      thumbImage: 'assets/slider3.jpg',
      alt: 'Image 3'
    },
    {
      image: 'assets/slider4.jpg',
      thumbImage: 'assets/slider4.jpg',
      alt: 'Image 3'
    }


  ];

  constructor() {

  }

}
