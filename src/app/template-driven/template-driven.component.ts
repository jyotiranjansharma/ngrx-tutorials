import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }
  fromForm: any;

  ngOnInit(): void {
  }
  
  onSubmit(form: any) {
    console.log(form.value);
    this.fromForm = form.value;
  }

}
