
import {ComponentFactory, ComponentFactoryResolver, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@app/landing/landing/landing.page';
import {CommonModule} from '@angular/common';

import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';
import {AuthGuard} from '@app/features/auth/auth.guard';
import { CoreEntryComponent } from './core-entry/core-entry.component';

import {SettingsModule} from '@app/core/layout/settings/settings.module';

import {MatButtonModule} from '@angular/material';
import {LayoutService} from '@app/core/layout/layout.service';
import {LayoutMainComponent} from '@app/core/layout/layout-main/layout-main.component';
import {LayoutModule} from '@app/core/layout/layout.module';
import {AdminEntryComponent} from '@app/features/admin/admin-entry/admin-entry.component';
import {AdminModule} from '@app/features/admin/admin.module';
import {MaterialMatModule} from '@app/material/material-mat.module';
import {MaterialSdkModule} from '@app/material/material-sdk.module';
import {MaterialAppModule} from '@app/material/material-app.module';


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
   MaterialMatModule,
    MaterialSdkModule,
    MaterialAppModule,
    SettingsModule,
    LayoutModule,
    AdminModule,
  ],
  exports: [

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


