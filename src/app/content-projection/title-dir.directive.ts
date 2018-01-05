import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[titledir]',
  exportAs: 'titledir2'
})
export class TitleDirDirective {
  @Input() message: string;
  @HostListener('click') displayMessage():void{
    alert(`The title is: ${this.message}`);
  }
  constructor() { }

}
