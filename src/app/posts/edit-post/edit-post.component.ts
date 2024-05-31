import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from 'src/app/models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})

export class EditPostComponent implements OnInit {
  post!: Post;
  postForm!: FormGroup;
  postSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = params.get('id');
      this.store.select(getPostById, { id }).subscribe(
        data => {
          console.log('data in edit post componetn', data);
          this.post = data;
          this.createForm();
        }
      )
    })
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required, Validators.minLength(10)])
    });
  }

  onUpdate() {
    if(!this.postForm.valid)
      return;

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    console.log('from edit post',title, description);

    const post = {
      id: this.post.id,
      title,
      description
    }

    this.store.dispatch(updatePost({post}));
  }

  ngOnDestroy() {
    if (this.postSubscription)
      this.postSubscription.unsubscribe()
  }
}
