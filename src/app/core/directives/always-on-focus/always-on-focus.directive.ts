import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlwaysOnFocus]'
})
export class AlwaysOnFocusDirective {

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {
    const element = this.elementRef.nativeElement;
    this.renderer.listen(
      element,
      'blur',
      () => element.focus()
    )
  }
}
