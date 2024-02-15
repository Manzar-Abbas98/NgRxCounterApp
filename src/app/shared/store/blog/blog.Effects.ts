import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import { EMPTY, catchError, exhaustMap, map, of } from 'rxjs';
import {
  LOAD_BLOG,
  addblog,
  addblogsuccess,
  loadblogfail,
  loadblogsuccess,
} from './blog.actions';
import { BlogModel } from './blog.model';

@Injectable()
export class BlogEffects {
  constructor(
    private action$: Actions,
    private service: MasterService,
  ) {}

  _blog = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_BLOG),
      exhaustMap((action) => {
        return this.service.GetAllBlogs().pipe(
          map((data) => {
            return loadblogsuccess({ bloglist: data });
          }),
          catchError((_error) => of(loadblogfail({ Errortext: _error }))),
        );
      }),
    ),
  );

  _AddBlog = createEffect(() =>
    this.action$.pipe(
      ofType(addblog),
      exhaustMap((action) => {
        return this.service.CreateBlog(action.bloginput).pipe(
          map((data) => {
            return addblogsuccess({ bloginput: data as BlogModel });
          }),
          catchError((_error) => of(loadblogfail({ Errortext: _error }))),
        );
      }),
    ),
  );
}
