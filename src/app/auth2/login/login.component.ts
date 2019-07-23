import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {login} from '../auth.actions';
import {AuthActions} from '../action-types';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@app/auth2/auth.service';
import {Router} from '@angular/router';
import {AppState} from '@app/core/reducers';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {noop} from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>) {

    this.form = fb.group({
      email: ['test@gmail.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });

  }

  ngOnInit() {

  }

  login() {

    const val = this.form.value;

    this.auth.login(val.email, val.password)
      .pipe(
        tap(user => {

          console.log(user);

          this.store.dispatch(login({user}));

          this.router.navigateByUrl('/courses');

        })
      )
      .subscribe(
        noop,
        () => alert('Login Failed')
      );


  }

}

