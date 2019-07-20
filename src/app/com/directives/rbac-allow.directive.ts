import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService, User} from '@app/modules/auth/auth.service';


@Directive({
  selector: '[rbacAllow]'
})
export class RbacAllowDirective implements OnDestroy {

  allowedRoles: string[];
  user: User;
  sub;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {
    this.sub = auth.user$.subscribe(u => {
      this.user = u;
      this.showIfUserAllowed();
    })
  }

  @Input()
  set rbacAllow(allowRoles: string[]) {
    this.allowedRoles = allowRoles;
    this.showIfUserAllowed();
  }

  private showIfUserAllowed() {
    if (!this.allowedRoles || this.allowedRoles.length === 0 || !this.user) {
      this.viewContainer.clear();
    } else {
     const ar =  [] //  _.intersection(this.allowedRoles, this.user.roles);
      if (ar.length) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
