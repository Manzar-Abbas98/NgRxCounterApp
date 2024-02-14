import { BlogComponent } from 'src/app/component/blog/blog.component';
import { counterModel } from '../counter.model';
import { Blogs } from '../blog/blog.model';

export interface AppStateModel {
  counter: counterModel;
  blog: Blogs;
}
