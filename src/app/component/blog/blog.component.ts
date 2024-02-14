import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import { getblog } from 'src/app/shared/store/blog/blog.selector';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor(private store: Store<AppStateModel>) {}

  bloglist!: BlogModel[];
  ngOnInit(): void {
    this.store.select(getblog).subscribe((item) => {
      this.bloglist = item;
      console.log(this.bloglist);
    });
  }
}
