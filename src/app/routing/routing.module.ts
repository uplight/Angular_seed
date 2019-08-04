import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SelectivePreloadingStrategyService} from '@app/routing/selective-preloading-strategy.service';
import {LandingPageComponent} from '@app/core/layout/landing-page/landing-page.component';
import {PageNotFoundComponent} from '@app/core/layout/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: '', redirectTo: '/landing', pathMatch: 'full'
  },
 /* {
    path: '',
    loadChildren: () => import('./core/core.module').then(mod => mod.CoreModule),
    data: {preload: true}

  },*/
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})

export class AppRoutingModule {

}
