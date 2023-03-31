import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlwaysOnFocus]'
})
export class AlwaysOnFocusDirective {

  private ref: HTMLElement;

  @HostListener('blur') onBlur() {
    this.focus();
  }

  constructor(el: ElementRef<HTMLElement>) {
    this.ref = el.nativeElement;
    this.focus();
  }

  private focus() {
    this.ref.focus();
  }

}
