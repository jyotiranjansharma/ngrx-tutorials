import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

    customerForm!: FormGroup
  constructor() { }

  ngOnInit(): void {
  }

  createCustomer() {
    
  }

}
