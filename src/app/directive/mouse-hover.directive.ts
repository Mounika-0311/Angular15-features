import { Directive } from '@angular/core';
import { ItalicsFontDirective } from './italics-font.directive';
import { FontColorDirective } from './font-color.directive';

@Directive({
  selector: '[appMouseHover]',
  standalone: true,
  /*------ Combination of two directives ------*/
  hostDirectives:[
    {
      directive: ItalicsFontDirective,
      outputs: ['hover']
    },
    {
      directive: FontColorDirective,
      inputs:['color'],
      // inputs:['color: colorChange'] ------it will give color which we assigned in the fontColorDirective
    }
  ]
})
export class MouseHoverDirective {

  constructor() { }

}
