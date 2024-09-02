import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';
import { deletePost, getAllPosts } from '../state/posts.action';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})

export class PostsListComponent implements OnInit {

    posts!: Observable<Post[]>;
    constructor(private store: Store<AppState>) {  }

    ngOnInit() {
        this.posts = this.store.select(getPosts);
        
    }

    onDeletePost(id?: string) {
        if(confirm("Are you sure to delete ?")) {
            console.log('delete the post', id)
            this.store.dispatch(deletePost({id}))
        }
    }
}
