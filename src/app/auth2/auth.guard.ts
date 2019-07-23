import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {select, Store} from '@ngrx/store';
import {isLoggedIn} from './auth.selectors';
import {tap} from 'rxjs/operators';
import {login, logout} from './auth.actions';
import {AppState} from '@app/core/reducers';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private store: Store<AppState>,
        private router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.store
            .pipe(
                select(isLoggedIn),
                tap(loggedIn => {
                    if (!loggedIn) {
                        this.router.navigateByUrl('/login');
                    }
                })
            )


    }

}
