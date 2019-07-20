import {AfterViewInit, Component, Inject, ReflectiveInjector, ViewChild, ViewContainerRef} from '@angular/core';
import {CoreUiService} from '@app/core/core-ui.service';
import {RouteConfigLoadEnd, Router} from '@angular/router';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';


  @ViewChild('appToolbar', {
    read: ViewContainerRef,
    static: true,
  }) appToolbar: ViewContainerRef;

  @ViewChild('appMenu', {
    read: ViewContainerRef,
    static: true,
  }) appMenu: ViewContainerRef;

  @ViewChild('appSettings', {
    read: ViewContainerRef,
    static: true,
  }) appSettings: ViewContainerRef;

  isMenu: any;
  imageClass: any;
  bgColor: any;

  constructor(
    private router: Router,
    private coreUIServoce: CoreUiService

  ) {

   const sub =  router.events.subscribe(evt => {
     if (evt instanceof RouteConfigLoadEnd) {
       this.router.navigateByUrl('/core')
     }
   })
  }

  ngAfterViewInit(): void {
    this.coreUIServoce.setContainerRef(this.appToolbar, this.appMenu, this.appSettings);
  }

  onClearStorage() {

  }

  onDogClick() {
  }

}
