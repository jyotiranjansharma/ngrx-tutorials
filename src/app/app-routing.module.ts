import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostevtoComponent } from './posts/add-postevto/add-postevto.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'counter', component: CounterComponent},
    { 
        path: 'posts', 
        component: PostsListComponent,
        children: [
            { path: 'add', component: AddPostevtoComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

