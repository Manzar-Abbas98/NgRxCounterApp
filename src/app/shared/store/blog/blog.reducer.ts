import { createReducer, on } from '@ngrx/store';

import { loadblog } from './blog.actions';
import { Blogstate } from './blog.state';

const _blogReducer = createReducer(
  Blogstate,
  on(loadblog, (state) => {
    return {
      ...state,
    };
  }),
);
export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
