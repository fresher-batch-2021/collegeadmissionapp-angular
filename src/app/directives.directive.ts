import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {

  constructor(public elementRef : ElementRef) 
  { 
    elementRef.nativeElement.style.backgroundColor = "gray";
    
  }

}
