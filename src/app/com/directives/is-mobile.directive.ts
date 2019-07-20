import {Directive, Inject, TemplateRef, ViewContainerRef} from '@angular/core';
import {IS_MOBILE} from '@app/core/is-mobile';

@Directive({
  selector: '[isMobile]'
})
export class IsMobileDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    @Inject(IS_MOBILE) isMobile: boolean
  ) {
   if (!isMobile) {  viewContainer.createEmbeddedView(templateRef); }

  }

}
