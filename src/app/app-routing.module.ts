import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '@app/core/layout/page-not-found/page-not-found.component';
import {SelectivePreloadingStrategyService} from '@app/routing/selective-preloading-strategy.service';
import {LandingPageComponent} from '@app/core/layout/landing-page/landing-page.component';
import {LayoutModule} from '@app/core/layout/layout.module';


const appRoutes: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'quest',
    loadChildren: () => import('./lazy/questions/questions.module').then(mod => mod.QuestionsModule),

  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    LayoutModule,
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

})

export class AppRoutingModule {

}
