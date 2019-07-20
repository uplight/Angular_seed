import {InjectionToken, NgModule} from '@angular/core';
import {AppComponent} from '@app/app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from '@app/core/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AuthInterceptor} from '@app/modules/auth/auth-interceptor';
import {AppRoutingModule} from '@app/app-routing.module';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@app/material/material.module';
import {MatButtonModule, MatSidenavModule} from '@angular/material';
import {HeaderModule} from '@app/core/header/header.module';
import {is_mobile, IS_MOBILE} from '@app/core/is-mobile';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
    /*   BrowserModule,
       BrowserAnimationsModule,
       AppRoutingModule,
       HttpClientModule,
       DirectivesModule,
       HttpClientXsrfModule.withOptions({
         cookieName: 'XSRF-TOKEN',
         headerName: 'x-xsrf-token'
       }),

       MatInputModule,
       MatButtonModule,
       MatSelectModule,
       MatRadioModule,
       MatCardModule,
       ReactiveFormsModule

     */
  ],
  providers: [
    {provide: IS_MOBILE, useValue: is_mobile},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
