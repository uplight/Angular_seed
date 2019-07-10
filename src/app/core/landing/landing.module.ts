import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@app/core/landing/landing/landing.page';
import {SharedModule} from '@shared/shared.module';
import {UiModule} from '@app/ui/ui.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const landingRoutes: Routes = [
    {
        path: '',
        component: LandingPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        SharedModule,
      UiModule,
        RouterModule.forChild(landingRoutes)
    ],
    declarations: [
        LandingPage,
        PageNotFoundComponent
    ],
    providers: []
})
export class LandingModule {
}
