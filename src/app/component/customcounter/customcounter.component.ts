import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { customincrement } from 'src/app/shared/store/counter.actions';
import { getchannelname } from 'src/app/shared/store/counter.selector';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css'],
})
export class CustomcounterComponent implements OnInit {
  constructor(private store: Store<{ counter: counterModel }>) {}
  ngOnInit(): void {
    this.counterSubscribe = this.store
      .select(getchannelname)
      .subscribe((data) => {
        this.channelname = data;
        console.log('custom counter');
      });
  }

  counterinput!: number;
  actiontype = 'Increment';
  channelname = '';
  counterSubscribe!: Subscription;

  onIncrement() {
    this.store.dispatch(
      customincrement({ value: +this.counterinput, action: this.actiontype }),
    );
  }
}
