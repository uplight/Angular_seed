import {AfterViewInit, Component, Inject, ReflectiveInjector, ViewChild, ViewContainerRef} from '@angular/core';
import {CoreUiService} from '@app/core/core-ui.service';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';


  @ViewChild('appHeader', {
    read: ViewContainerRef,
    static: true,
  }) viewContainerRef: ViewContainerRef;

  isMenu: any;
  imageClass: any;
  bgColor: any;

  constructor(
    private coreUIServoce: CoreUiService

  ) { }

  ngAfterViewInit(): void {
    this.coreUIServoce.setMenuContainerRef(this.viewContainerRef);
  }

  onClearStorage() {

  }

  onDogClick() {
  }

}
