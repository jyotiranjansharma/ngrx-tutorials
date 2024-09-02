import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
    parentMessage: string = "This is a message from parent !";
    messageFromChild: string = ''
    showHeader = true
    parentProperty = 'Initial Parent Value';
    
    receiveMessage($event: string) {
        this.messageFromChild = $event
    }

    constructor() { }

    ngOnInit(): void {
    }

}
