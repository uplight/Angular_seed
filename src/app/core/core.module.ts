
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@app/core/landing/landing/landing.page';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@app/material/material.module';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';
import {AuthGuard} from '@app/auth/auth.guard';
import { CoreEntryComponent } from './core-entry/core-entry.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


export const appRoutes: Routes = [
  {
    path: '', component: CoreEntryComponent

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
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes),
    PipesModule,
    DirectivesModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    PipesModule,
    DirectivesModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [

    CoreEntryComponent
  ]
})

export class CoreModule {
}


