import {AfterViewInit, Component, Inject, ViewChild, ViewContainerRef} from '@angular/core';

import {RouteConfigLoadEnd, Router} from '@angular/router';
import {LayoutService} from '@app/core/layout/layout.service';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';


  @ViewChild('appLayout', {
    read: ViewContainerRef,
    static: true,
  }) appLayout: ViewContainerRef;


  isMenu: any;
  imageClass: any;
  bgColor: any;

  constructor(
    private router: Router,
    private layoutService: LayoutService


  ) {

   const sub =  router.events.subscribe(evt => {
     if (evt instanceof RouteConfigLoadEnd) {
       console.log(' preloading end ');
       sub.unsubscribe();
       // this.router.navigateByUrl('/core')
     }
   })
  }

  ngAfterViewInit(): void {
    this.layoutService.appLayout = this.appLayout

  }

  onClearStorage() {

  }

  onDogClick() {
  }

}
