import {shareReplay, filter, tap, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import * as auth0 from 'auth0-js';


export interface User {
  id: string;
  email: string;
  roles: string[];
}

export const ANONYMOUS_USER: User = {
  id: undefined,
  email: undefined,
  roles: ['NONE']
}

const AUTH_CONFIG = {
  clientID: 'hHhF4PWGY7vxLQH2HatJaUOertB1dDrU',
  domain: 'angularsecuritycourse.auth0.com'
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0: any = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    redirectUri: 'https://localhost:4200/lessons',
    scope: 'openid email picture'
  });

  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);
  user$: Observable<User> = this.subject.asObservable().pipe(filter(user => !!user));

  constructor(private http: HttpClient, private router: Router) {
    if (this.isLoggedIn()) {
      this.userInfo();
    }

  }

  login() {
    this.auth0.authorize({initialScreen: 'login'});
  }

  signUp() {
    this.auth0.authorize({initialScreen: 'signUp'});
  }

  loginAsUser(email: string) {
    return this.http.post<User>('/api/admin', {email})
      .pipe(
      shareReplay(),
      tap(user => this.subject.next(user)));
  }

  retrieveAuthInfoFromUrl() {
    this.auth0.parseHash((err, authResult) => {
      if (err) {
        console.log('Could not parse the hash', err);
      } else if (authResult && authResult.idToken) {
        window.location.hash = '';
        console.log('Authentication successful, authResult: ', authResult);
        this.setSession(authResult);

        this.userInfo();

      }
    });
  }

  userInfo() {
    this.http.put<User>('/api/userinfo', null).pipe(
      shareReplay(),
      tap(user => this.subject.next(user))
    )

      .subscribe();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/lessons']);
  }

  public isLoggedIn() {
    return  true ; // moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return 0 ; // moment(expiresAt);
  }

  private setSession(authResult) {

    const expiresAt = 123; // moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));

  }

}






