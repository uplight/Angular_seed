import { Injectable } from '@angular/core';

import {OnDemandSubject} from '../../helpers/on-demand-subject';
import {filter, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  private _config$ : OnDemandSubject<any>;
  config$: Observable<any>;

  constructor(
    private http: HttpClient
  ) {

    this._config$ = new OnDemandSubject<any>(this.loadConfig());
    this.config$ = this._config$.pipe(
      filter(v => !!v),
      map(v => v.payload)
    )

  }

  loadConfig() {
   return  this.http.get('/assets/mocks/app-config.json');
  }
}
