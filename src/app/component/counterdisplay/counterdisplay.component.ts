import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { counterModel } from 'src/app/shared/store/counter.model';
import { getcounter } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css'],
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppStateModel>) {}
  counterdisplay!: number;
  channelname = '';
  counterSubscribe!: Subscription;
  counter$!: Observable<counterModel>;

  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getcounter).subscribe((data) => {
      this.counterdisplay = data;
      console.log('counter display');
    });
    // this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    if (this.counterSubscribe) {
      this.counterSubscribe.unsubscribe();
    }
  }
}
