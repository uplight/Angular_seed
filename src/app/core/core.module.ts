import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@landing/landing/landing.page';
import {CommonModule} from '@angular/common';
import {AppRolesGuard} from '@shared/guards/app-roles.guard';

export const appRoutes: Routes = [
  {
    path: 'landing',
    loadChildren: '@app/modules/landing/landing.module#LandingModule',
  },
  {
    path: 'products',
    loadChildren: '@app/modules/products/products.module#ProductsModule',
    canActivate: [AppRolesGuard],
    data: {
      roles: ['admin', 'super', 'NONE']
    }
  },
  {
    path: 'product',
    loadChildren: '@app/modules/product/product.module#ProductModule',
  },
  {path: '**', redirectTo: 'landing'}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ],
  providers: []
})
export class CoreModule {
}
