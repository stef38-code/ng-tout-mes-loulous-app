import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[enfantBorderCard]',
  standalone: true
})
export class EnfantBorderCardDirective {

  private defaultHeight: number = 180;
  private defaultColor: string = '#c95570';

  private initColor: string = '#f5f5f5';

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initColor);
  }

  @Input('enfantBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    // || #.... permet de mettre une valeur par défaut
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height} px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = 'solid 2px ' + color;
  }

}
