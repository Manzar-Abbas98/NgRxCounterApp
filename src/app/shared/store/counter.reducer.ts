import { createReducer, on } from '@ngrx/store';
import {
  customincrement,
  changechannelname,
  decrement,
  increment,
  reset,
} from './counter.actions';
import { initialstate } from './counter.state';

const _counterReducer = createReducer(
  initialstate,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customincrement, (state, action) => {
    return {
      ...state,
      counter:
        action.action == 'Increment'
          ? state.counter + action.value
          : state.counter - action.value,
    };
  }),

  on(changechannelname, (state, action) => {
    return {
      ...state,
      channelname: action.channel,
    };
  }),
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
