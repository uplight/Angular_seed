import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {QuestionHostDirective} from '@app/lazy/questions/question-host.directive';
import {ComponentsLibraryService} from '@app/lazy/questions/components-library.service';

@Component({
  selector: 'app-quest-entry-page',
  templateUrl: './quest-entry-page.component.html',
  styleUrls: ['./quest-entry-page.component.css']
})
export class QuestEntryPageComponent implements OnInit {

  @ViewChild(QuestionHostDirective, {static: true}) hostDirective: QuestionHostDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private library: ComponentsLibraryService ) { }

  ngOnInit() {

   // const address = this.library.getComponent('Address', {validator: ['one', 'two']});
   // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(address.component);
   // const viewContainerRef = this.hostDirective.viewContainerRef;
  // const componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
