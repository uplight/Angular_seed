import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';
import {LandingPage} from '@app/core/landing/landing/landing.page';
import {PageNotFoundComponent} from '@app/core/landing/page-not-found/page-not-found.component';
import {AppRolesGuard} from '@shared/guards/app-roles.guard';


const appRoutes: Routes = [
  {
    path: 'landing',
    component: LandingPage,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('@app/modules/products/products.module').then(mod => mod.ProductsModule),
    data: {preload: true}
  },
  {
    path: 'product',
    loadChildren: '@app/modules/product/product.module#ProductModule',
  },
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
  ]
})
export class AppRoutingModule {
}
