import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
    selector: 'app-counter-output',
    templateUrl: './counter-output.component.html',
    styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

    // @Input() counter: any;
    // counterSubscription!: Subscription;
    // counter!: number;
    counter$!: Observable<number>;
    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        // using destroy to unsuncribe the store
        // this.counterSubscription = this.store.select('counter').subscribe(data => {
        //     this.counter = data.counter;
        // })

        // using subscription method
        // getCounter is the selector used to separately call the selectors. 
        // Previously when counter was called it was also calling the channel name
        // this.store.select(getCounter).subscribe(counter => {
        //     console.log('counter is called');
        //     this.counter = counter;
        // });

        // this.store.select('counter').subscribe(data => {
        //     console.log('counter is called');
        //     this.counter = data.counter;
        // })

        // using observable for async display of counter in html
        this.counter$ = this.store.select(getCounter);
    }

    ngOnDestroy(): void {
        // if (this.counterSubscription)
        //     this.counterSubscription.unsubscribe();
    }

}
