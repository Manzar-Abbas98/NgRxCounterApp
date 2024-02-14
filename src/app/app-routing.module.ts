import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './component/blog/blog.component';
import { CounterAppComponent } from './component/counter-app/counter-app.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  {
    path: 'counter',
    component: CounterAppComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
