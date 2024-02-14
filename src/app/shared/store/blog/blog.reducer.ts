import { createReducer, on } from '@ngrx/store';

import { addblog, loadblog, updateblog } from './blog.actions';
import { Blogstate } from './blog.state';

const _blogReducer = createReducer(
  Blogstate,
  on(loadblog, (state) => {
    return {
      ...state,
    };
  }),

  on(addblog, (state, action) => {
    const _blog = { ...action.bloginput };
    _blog.id = state.bloglist.length + 1;
    return {
      ...state,
      bloglist: [...state.bloglist, _blog],
    };
  }),

  on(updateblog, (state, action) => {
    const _blog = { ...action.bloginput };
    const updatedblog = state.bloglist.map((blog) => {
      return _blog.id === blog.id ? _blog : blog;
    });
    return {
      ...state,
      bloglist: updatedblog,
      // IsLoaded:false
    };
  }),
);
export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
