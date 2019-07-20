import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenavContainer} from '@angular/material';
import {templateJitUrl} from '@angular/compiler';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenavContainer, {static: true}) sidenavContainer: MatSidenavContainer;
  isOpen: boolean

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.sidenavContainer);

    // this.sidenavContainer.scrollable.elementScrolled().subscribe(() => /* react to scrolling */);
  }

  open() {
    this.isOpen = true;
    this.sidenavContainer.open();
  }

  close() {
    this.isOpen = false;
    this.sidenavContainer.close();
  }


  toggle() {

    if (this.isOpen) {
      this.close();
    } else {
      this.open()
    }
  }
}
