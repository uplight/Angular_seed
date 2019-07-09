import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '@app/auth/auth.service';
import {map, take, tap} from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AppRolesGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const roles: string[] = route.data.roles;
    console.warn(roles);
    return this.auth.user$.pipe(
      take(1),
      tap(user => console.log(user)),
      map(user => _.intersection(roles, user.roles).length !== 0),
      tap(isAllow => {
        console.log(isAllow)
      })
    )
  }


}
