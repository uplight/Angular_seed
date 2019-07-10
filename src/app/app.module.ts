import {NgModule} from '@angular/core';
import {AppComponent} from '@app/app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from '@app/core/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {productsReducers} from '@product/store/products.reducers';
import {ProductsEffects} from '@product/store/products.effects';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from '@app/auth/auth-interceptor';
import {AppRoutingModule} from '@app/app-routing/app-routing.module';
import {LandingPage} from '@app/core/landing/landing/landing.page';
import {PageNotFoundComponent} from '@app/core/landing/page-not-found/page-not-found.component';
import {MaterialModule} from '@app/material/material.module';
import {DirectivesModule} from '@app/com/directives/directives.module';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    DirectivesModule,
    PipesModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'x-xsrf-token'
    }),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('products', productsReducers),
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [
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
