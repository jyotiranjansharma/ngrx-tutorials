import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { customincrement } from '../counter/state/counter.action';

@Component({
    selector: 'app-custom-counter-input',
    templateUrl: './custom-counter-input.component.html',
    styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

    value!: string;
    channelName!: string;
    constructor(private store: Store<{ counter: CounterState }>) { }

    ngOnInit(): void {
        this.store.select('counter').subscribe(
            data => {
                this.channelName = data.channelName;
            }
        )
    }

    addTo() {
        this.store.dispatch(customincrement({ count: parseInt(this.value) }))
    }
}
