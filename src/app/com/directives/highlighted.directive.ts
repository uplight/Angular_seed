import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'export-as-hl'
})
export class HighlightedDirective {

  @Input('appHighlighted')
  isHighlighted = false;
  @Output()
  toggleHighlight = new EventEmitter();
  constructor() { }
/*
  @HostBinding('className')
  get cssClasses() {
    return 'highlighted';
  }*/

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    this.isHighlighted = true;
    this.toggleHighlight.emit(true);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(false);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
  }


}
