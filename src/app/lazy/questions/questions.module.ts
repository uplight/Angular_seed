import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Route, RouterModule, Routes} from '@angular/router';

import { QuestEntryPageComponent } from './quest-entry-page/quest-entry-page.component';
import { QuestPageComponent } from './quest-page/quest-page.component';
import { QuestChildPageComponent } from './quest-child-page/quest-child-page.component';

export const routes: Routes = [
  {path: '', component: QuestEntryPageComponent},
  {path: ':topic/:question', component: QuestPageComponent},
  {path: ':topic/:subtopic/:question', component: QuestChildPageComponent}
];

@NgModule({
  declarations: [
    QuestEntryPageComponent,
    QuestPageComponent,
    QuestChildPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuestionsModule { }
