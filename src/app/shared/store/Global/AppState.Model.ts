import { BlogComponent } from 'src/app/component/blog/blog.component';
import { counterModel } from '../counter.model';

export interface AppStateModel {
  counter: counterModel;
  blog: BlogComponent[];
}
