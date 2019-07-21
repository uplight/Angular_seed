
import {ComponentFactory, ComponentFactoryResolver, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@app/landing/landing/landing.page';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@app/material/material.module';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';
import {AuthGuard} from '@app/modules/auth/auth.guard';
import { CoreEntryComponent } from './core-entry/core-entry.component';

import {SettingsModule} from '@app/core/layout/settings/settings.module';

import {MatButtonModule} from '@angular/material';
import {LayoutService} from '@app/core/layout/layout.service';
import {LayoutMainComponent} from '@app/core/layout/layout-main/layout-main.component';
import {LayoutModule} from '@app/core/layout/layout.module';
import {AdminEntryComponent} from '@app/modules/admin/admin-entry/admin-entry.component';
import {AdminModule} from '@app/modules/admin/admin.module';
import {ProductModule} from '@product/product.module';

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
       component: AdminEntryComponent,
    // loadChildren: () => import('../modules/admin/admin.module').then(mod => mod.AdminModule),
     canLoad: [AuthGuard]

  },
 /* {
    path: 'product',
    component: Pro,
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
    MaterialModule,
    SettingsModule,
    LayoutModule,
    AdminModule,
    ProductModule
  ],
  exports: [
    MaterialModule,
    PipesModule,
    DirectivesModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [
    CoreEntryComponent,
    LayoutMainComponent
   //  HeaderComponent
  ],
  entryComponents: [
    LayoutMainComponent
  ]
})

export class CoreModule {

  constructor(
    private layout: LayoutService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    const main: ComponentFactory<any> =  componentFactoryResolver.resolveComponentFactory(LayoutMainComponent);
    layout.appLayout.createComponent(main);
  }
}


