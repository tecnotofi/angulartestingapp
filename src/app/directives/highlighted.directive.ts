import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input('appHighlighted') newColor: string;

  constructor(private el: ElementRef) {
    // console.log('Directiva llamada');
  }

  @HostListener('mouseenter') mouseHover() {
    this.highlight(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') mouseUnHover() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
