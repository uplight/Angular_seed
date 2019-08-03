import {Observable, Subject, Subscriber, Subscription, SubscriptionLike} from 'rxjs';


export class OnDemandSubject<T> extends Subject<T>{
  private _value: T;
  private _loading = false;
  constructor(private loader: Observable<any>) {
    super();
  }
  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<T>): Subscription {
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<SubscriptionLike>subscription).closed) {
      if(this._value) subscriber.next(this._value);
      else {
        if(!this._loading) {
          this._loading = true;
          this.loader.subscribe(v => {
            this._value = v;
            this.next(v);
            this._loading = false;
          })
        }
      }
    }
    return subscription;
  }

  getValue(): T {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new Error('closed');
    } else {
      return this._value;
    }
  }

  next(value: T): void {
    super.next(this._value = value);
  }

}
