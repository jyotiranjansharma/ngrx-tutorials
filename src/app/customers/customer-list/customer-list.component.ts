import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

    customers: any;

    store = inject(Store<any>);

    // constructor() { }

    ngOnInit() {
        this.store.dispatch({type: "LOAD_CUSTOMERS"});
        this.store.subscribe((state) => this.customers = state.customers.customers)
    }

}
