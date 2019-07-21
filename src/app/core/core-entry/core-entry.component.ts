import {AfterViewChecked, Component, ComponentFactory, ComponentFactoryResolver, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material';

import {SettingsPanelComponent} from '@app/core/layout/settings/settings-panel/settings-panel.component';

@Component({
  selector: 'app-core-entry',
  templateUrl: './core-entry.component.html',
  styleUrls: ['./core-entry.component.css']
})
export class CoreEntryComponent implements OnInit, AfterViewChecked {

  constructor(

  ) {

  }

  ngOnInit(): void {

  }
  ngAfterViewChecked(): void {

  }
}
