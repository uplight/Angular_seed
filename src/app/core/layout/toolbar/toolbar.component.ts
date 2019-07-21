import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuClick: EventEmitter<string> = new EventEmitter();
  constructor(

  ) { }

  ngOnInit() {
    console.log(' HeaderComponent  init ');
  }

  onMenuClick($event: MouseEvent) {
    this.menuClick.emit('menu');
  }

  onSettingsClick($event: MouseEvent) {
    this.menuClick.emit('settings');
  }
}
