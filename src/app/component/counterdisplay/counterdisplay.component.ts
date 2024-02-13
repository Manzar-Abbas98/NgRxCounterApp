import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css'],
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{ counter: counterModel }>) {}
  counterdisplay!: number;
  channelname = '';
  counterSubscribe!: Subscription;
  counter$!: Observable<counterModel>;

  ngOnDestroy(): void {
    if (this.counterSubscribe) {
      this.counterSubscribe.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.counterSubscribe = this.store.select('counter').subscribe((data) => {
      this.counterdisplay = data.counter;
      this.channelname = data.channelname;
    });
    this.counter$ = this.store.select('counter');
  }
}
