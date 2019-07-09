import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '@app/core/data-store.service';
import {concat, fromEvent, Observable} from 'rxjs';
import {concatMap, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {createHttpObservable} from '@app/core/services/apis/api-cancelable';

@Component({
  selector: 'landing-page',
  templateUrl: './landing.page.html'
})
export class LandingPage implements AfterViewInit, OnInit {

  @ViewChild('searchInput', {static: false}) searchInput: ElementRef;

  productIds$: Observable<string[]>;
  myId = '0';

  lessons$: Observable<any[]>;

  constructor(
    private dataService: DataStoreService
  ) {
    this.productIds$ = dataService.products$
      .pipe(map(products => products.map(item => item.id)));
  }


  ngOnInit(): void {
   // createHttpObservable(`/api/courses/${this.myId}`).subscribe(console.log)
  }

  ngAfterViewInit(): void {

   const searchLessons$ = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged(),
       tap(v => console.log(' typing ' + v)),
       // concatMap(search => this.loadLessons(search))
        switchMap(search => this.loadLessons(search))
      );

    const initLessons$ = this.loadLessons();
    this.lessons$ = concat(initLessons$, searchLessons$);
   // this.lessons$.subscribe(console.log);
  }


  loadLessons(search = '') {
    return createHttpObservable(`api/lessons?courseId=1&pageSize=100&filter=${search}`)
      .pipe(
        map(res => res['payload']),
        tap(lessons => console.log(lessons))
      )
  }
}
