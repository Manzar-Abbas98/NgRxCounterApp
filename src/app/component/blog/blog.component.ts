import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import { getblog } from 'src/app/shared/store/blog/blog.selector';
import { AddblogComponent } from '../addblog/addblog.component';
import { MatDialog } from '@angular/material/dialog';
import { deleteblog } from 'src/app/shared/store/blog/blog.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor(
    private store: Store<AppStateModel>,
    private dialog: MatDialog,
  ) {}

  bloglist!: BlogModel[];
  ngOnInit(): void {
    this.store.select(getblog).subscribe((item) => {
      this.bloglist = item;
      console.log(this.bloglist);
    });
  }

  AddBlog() {
    this.OpenPopup(0, 'Add Blog');
  }
  EditBlog(id: any) {
    console.log(id);
    this.OpenPopup(id, 'Edit Blog', true);
    // this.router.navigate(['blog/edit/' + id]);
  }
  RemoveBlog(id: any) {
    if (confirm('Are you sure want to remove?')) {
      this.store.dispatch(deleteblog({ id: id }));
    }
  }

  OpenPopup(id: any, title: any, isedit = false) {
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isedit: isedit,
      },
    });
  }
}
