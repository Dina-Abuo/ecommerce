import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[SHadowItem]'
})
export class SHadowItemDirective implements OnInit {
  y: string = '1'
  @Input('SHadowItem') x: string = '0'

  constructor(public elementRef: ElementRef) {
  }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.boxShadow = 'none'
  }

  @HostListener('mouseover') show() {

    this.elementRef.nativeElement.style.boxShadow = `0 .5rem ${+this.y}rem rgba(0,0,0,.15)`

  }


  @HostListener('mouseout') hide() {
    this.elementRef.nativeElement.style.boxShadow ='none'
  }
}

