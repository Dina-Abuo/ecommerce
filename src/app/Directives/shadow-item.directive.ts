import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[SHadowItem]'
})
export class SHadowItemDirective {
  y: string = '1'
  @Input('SHadowItem') x: string = '0'

  constructor(public elementRef: ElementRef) {
    this.elementRef.nativeElement.style.boxShadow = 'none'
  }


  @HostListener('mouseover') show() {

    this.elementRef.nativeElement.style.boxShadow = `0 .5rem ${+this.y}rem rgba(0,0,0,.15)`

  }


  @HostListener('mouseout') hide() {

    this.elementRef.nativeElement.style.boxShadow = `0 .5rem ${+this.x}rem rgba(0,0,0,.15)`

  }
}

