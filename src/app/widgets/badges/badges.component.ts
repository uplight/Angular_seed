import {Attribute, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  @Input() badges: string[];
  constructor(
    @Attribute('badge-type') private  type: string
  ) { }

  ngOnInit() {
    console.log(this.type);
  }

}
