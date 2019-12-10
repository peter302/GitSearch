import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appGitthrough]'
})
export class GitthroughDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.textDecoration='line-through';}

}
