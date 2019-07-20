import {AfterViewChecked, Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {CoreUiService} from '@app/core/core-ui.service';
import {HeaderComponent} from '@app/core/header/header/header.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-core-entry',
  templateUrl: './core-entry.component.html',
  styleUrls: ['./core-entry.component.css']
})
export class CoreEntryComponent implements OnInit, AfterViewChecked {

  constructor(
    private dialog: MatDialog,
    private coreUI: CoreUiService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    const componentFactory =  componentFactoryResolver.resolveComponentFactory(HeaderComponent);
    this.coreUI.addMenu(componentFactory);
  }

  ngOnInit(): void {
// console.log(HeaderComponent);
  //   this.dialog.open(HeaderComponent, {width: '300px', height: '300px'});

/*
setTimeout(() => {
  this.coreUI.addMenu(HeaderComponent);
}, 2000)
*/


  }
  ngAfterViewChecked(): void {

  }
}
