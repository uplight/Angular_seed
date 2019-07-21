import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectivePreloadingStrategyService} from './landing/selective-preloading-strategy.service';
import {LandingPage} from '@app/landing/landing/landing.page';
import {PageNotFoundComponent} from '@app/landing/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'landing',
    component: LandingPage
  },
  {
    path: '',
    loadChildren: () => import('./core/core.module').then(mod => mod.CoreModule),
    data: {preload: true}
  },
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
    LandingPage,
    PageNotFoundComponent
  ]
})

export class AppRoutingModule {

}
