import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@landing/landing/landing.page';
import {SharedModule} from '@shared/shared.module';
import {UiModule} from '@app/ui/ui.module';


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
        LandingPage
    ],
    providers: []
})
export class LandingModule {
}
