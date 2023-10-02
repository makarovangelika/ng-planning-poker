import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButtonStyle]'
})
export class ButtonStyleDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add("font-bold", "bg-indigo-500", "hover:opacity-50", "ease-in-out", "duration-200", "rounded-md", "text-slate-50", "py-3", "px-6", "mt-3");
  }
}
