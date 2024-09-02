import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-model-driven',
    templateUrl: './model-driven.component.html',
    styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

    form: FormGroup;
    fromForm: any;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            name: ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    onSubmit() {
        if (this.form.valid) {
            console.log(this.form.value);
            this.fromForm = this.form.value;
        }
    }
}
