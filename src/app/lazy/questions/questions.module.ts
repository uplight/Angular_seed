import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Route, RouterModule, Routes} from '@angular/router';

import {QuestEntryPageComponent} from './quest-entry-page/quest-entry-page.component';
import {QuestPageComponent} from './quest-page/quest-page.component';
import {QuestChildPageComponent} from './quest-child-page/quest-child-page.component';
import {QuestionHostDirective} from './question-host.directive';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialMatModule} from '@app/material/material-mat.module';
import {AppFormsModule} from '@app/app-forms/app-forms.module';

export const routes: Routes = [
  {path: '', component: QuestEntryPageComponent},
  {path: ':topic/:question', component: QuestPageComponent},
  {path: ':topic/:subtopic/:question', component: QuestChildPageComponent}
];

@NgModule({
  declarations: [
    QuestEntryPageComponent,
    QuestPageComponent,
    QuestChildPageComponent,
    QuestionHostDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMatModule,
    RouterModule.forChild(routes),
    AppFormsModule
  ],
  entryComponents: []
})
export class QuestionsModule {
}
