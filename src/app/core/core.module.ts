
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@app/core/landing/landing/landing.page';
import {CommonModule} from '@angular/common';
import { StartComponent } from './start/start.component';
import {MaterialModule} from '@app/material/material.module';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';
import {AuthGuard} from '@app/auth/auth.guard';


export const appRoutes: Routes = [
  {
    path: '', component: StartComponent

    // loadChildren: '@app/modules/products/products.module#ProductsModule',
 //   canActivate: [AppRolesGuard],
   /* data: {
      roles: ['admin', 'super', 'NONE']
    }*/
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  /*{
    path: 'product',
    loadChildren: '@app/modules/product/product.module#ProductModule',
  },*/
//   {path: '**', redirectTo: 'landing'}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild(appRoutes),
    MaterialModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    MaterialModule,
    PipesModule,
    DirectivesModule
  ],
  providers: [],
  declarations: [
    StartComponent
  ]
})

export class CoreModule {
}


