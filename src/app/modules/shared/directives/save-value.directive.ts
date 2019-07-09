import {
  AfterViewInit, Attribute,
  Directive,
  ElementRef, Host,
  HostBinding,
  HostListener,
  Input,
  OnChanges, OnInit,
  ViewChild
} from '@angular/core';
import {MatCheckbox} from '@angular/material';

@Directive({
  selector: '[saveValue]'
})
export class SaveValueDirective implements OnInit, AfterViewInit {

  constructor(
    @Host() private hostInput: MatCheckbox,
    @Attribute('saveValue') private id: string,
    private el: ElementRef
  ) {
  }

  ngOnInit(): void {
   this.hostInput.checked = !!localStorage.getItem(this.id);
  }

  @HostListener('change', ['$event']) onChange(evt) {
    evt.checked ? localStorage.setItem(this.id,'true'): localStorage.removeItem(this.id);
  }

  ngAfterViewInit() {
  }


}
