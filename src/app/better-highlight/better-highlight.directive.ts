import {Directive, ElementRef, OnInit, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'gray';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // constructor(private elRef: ElementRef, private renderer: RendererV2) {
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  //  this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'orange', false, false);
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
//    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange', false, false);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
  //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor = this.defaultColor;
  }

}
