import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.action';

@Component({
    selector: 'app-add-postevto',
    templateUrl: './add-postevto.component.html',
    styleUrls: ['./add-postevto.component.scss']
})
export class AddPostevtoComponent implements OnInit {

    postForm!: FormGroup;
    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.postForm = new FormGroup({
            title: new FormControl(null, [
                Validators.required,
                Validators.minLength(6)
            ]),
            description: new FormControl(null, [
                Validators.required,
                Validators.minLength(10)
            ])
        })
    }

    showDescriptionErrors() {
        const descriptionForm: any = this.postForm.get('description');
        if (descriptionForm.touched && !descriptionForm.valid) {
            if (descriptionForm.errors.required && !descriptionForm.errors.minLength) {
                return 'Description is reqiuerd !';
            } else {
                return 'Description should be at least of 10 characters !';
            }
        }
        return;
    }

    onAddPost() {
        
        if(!this.postForm.valid) {
            return;
        }

        console.log(this.postForm.value);

        const post: Post = {
            title: this.postForm.value.title,
            description: this.postForm.value.description
        }

        this.store.dispatch(addPost({post}));
    }

}
