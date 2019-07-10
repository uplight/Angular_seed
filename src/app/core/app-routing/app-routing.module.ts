import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';
import {LandingPage} from '@app/core/landing/landing/landing.page';
import {PageNotFoundComponent} from '@app/core/landing/page-not-found/page-not-found.component';
import {AuthGuard} from '@app/auth/auth.guard';



const appRoutes: Routes = [
  {
    path: 'landing',
    component: LandingPage
  },
  {
    path: 'core',
    loadChildren: () => import('../core.module').then(mod => mod.CoreModule),
    data: {preload: true}
  },

  /*,
  {
    path: 'admin',
    loadChildren: () => import('../../admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('@products/products.module').then(mod => mod.ProductsModule),
    data: {preload: true}
  },
  {
    path: 'product',
    loadChildren: '@app/modules/product/product.module#ProductModule',
  },*/
  {path: '**', component: PageNotFoundComponent},

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
