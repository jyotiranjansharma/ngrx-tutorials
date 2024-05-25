import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-counter-output',
    templateUrl: './counter-output.component.html',
    styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

    // @Input() counter: any;
    // counterSubscription!: Subscription;
    // counter!: number;
    counter$!: Observable<{counter: number}>;
    constructor(private store: Store<{ counter: CounterState }>) { }

    ngOnInit(): void {
        // this.counterSubscription = this.store.select('counter').subscribe(data => {
        //     this.counter = data.counter;
        // })

        this.counter$ = this.store.select('counter');
    }

    ngOnDestroy(): void {
        // if (this.counterSubscription)
        //     this.counterSubscription.unsubscribe();
    }

}
