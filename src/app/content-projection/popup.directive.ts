import {
  Directive,
  ElementRef,
  Input,
  HostListener} from '@angular/core';


@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})
export class PopupDirective {

  @Input() popTitle: string;
  constructor() { }

  @HostListener('click') displayMessage():void{
    alert(this.popTitle);
  }

}
