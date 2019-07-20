import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuClick: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(' HeaderComponent  init ');
  }

  onFirstClick($event: MouseEvent) {
    this.menuClick.emit('menu');
  }

  onSettingsClick($event: MouseEvent) {
    this.menuClick.emit('settings');
  }
}
