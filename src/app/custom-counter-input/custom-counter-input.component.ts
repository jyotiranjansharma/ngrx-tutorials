import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { changeChannelName, customincrement } from '../counter/state/counter.action';
import { getChannelName } from '../counter/state/counter.selector';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';

@Component({
    selector: 'app-custom-counter-input',
    templateUrl: './custom-counter-input.component.html',
    styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

    value!: string;
    channelName$!: Observable<string>;
    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        // this.store.select(getChannelName).subscribe(
        //     channelName => {
        //         console.log('channel name called');
        //         this.channelName = channelName;
        //     }
        // )
        // this.store.select('counter').subscribe(data => {
        //     console.log('channel name is called');
        //     this.channelName = data.channelName;
        // })

        this.channelName$ = this.store.select(getChannelName);
    }

    addTo() {
        this.store.dispatch(customincrement({ count: parseInt(this.value) }))
    }

    onChangeChannelName() {
        this.store.dispatch(changeChannelName());
    }
}
