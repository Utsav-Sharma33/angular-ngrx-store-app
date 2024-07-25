import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { increment, decrement } from '../../store/counter/counter.action';
import { AppStore } from '../../store/store.type';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.page.html',
  styleUrl: './counter.page.css',
  selector: 'app-counter',
})
export class CounterPage {
  increment$: Observable<number>;
  constructor(private store: Store<AppStore>) {
    this.increment$ = store.select('counter');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
