import { Component, DoCheck, inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getPostById } from '../state/posts.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { updatePost } from '../state/posts.action';
import { CanComponentDeactivate } from 'src/app/can-deactivate.guard';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy, CanComponentDeactivate, DoCheck {

    postForm!: FormGroup
    post: any;
    route = inject(ActivatedRoute);
    store = inject(Store);
    postSubscription!: Subscription;
    hasUnsavedChanges: boolean = false;

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            this.store.select(getPostById, { id }).subscribe((data) => {
                this.post = data;
                console.log(this.post)
                this.createForm()
            })
        })
    }

    createForm() {
        this.postForm = new FormGroup({
            title: new FormControl(this.post.title, [
                Validators.required,
                Validators.minLength(6)
            ]),
            description: new FormControl(this.post.description, [
                Validators.required,
                Validators.minLength(10)
            ])
        })
    }

    ngDoCheck() {
        console.log('changes detcted');
        this.hasUnsavedChanges = true
    }

    onUpdatePost() {
        
        if (!this.postForm.valid) {
            return;
        }

        const title = this.postForm.value.title;
        const description = this.postForm.value.description;

        const post: Post = {
            id: this.post.id,
            title,
            description
        }

        this.store.dispatch(updatePost({ post }))

    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.hasUnsavedChanges) {
            return confirm('You have unsaved changes! Do you really want to leave?');
        }
        return true;
    }

    ngOnDestroy() {
        if (this.postSubscription) {
            this.postSubscription.unsubscribe()
        }
    }
}
