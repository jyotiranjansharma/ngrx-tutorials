import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'app-angularlifecycle',
    templateUrl: './angularlifecycle.component.html',
    styleUrls: ['./angularlifecycle.component.scss']
})
export class AngularlifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

    @Input() data!: string;

    @ContentChild('content') content: any;
    @ViewChild('viewChild') viewChild: any;

    constructor() {
        console.log('Constructor');
    }

    // Called when an input property changes. It receives a SimpleChanges object that contains the current and previous values of the changed properties
    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges', changes);
    }

    // Called once after the first ngOnChanges. It is used to initialize the component, fetch data, or set up subscriptions.
    ngOnInit() {
        console.log('ngOnInit');
    }

    // Called during every change detection run. It allows for custom change detection.
    ngDoCheck() {
        console.log('ngDoCheck');
    }

    // Called once after the first ngDoCheck when the component's content (ng-content) has been initialized.
    ngAfterContentInit() {
        console.log('ngAfterContentInit', this.content);
    }

    // Called after ngAfterContentInit and every subsequent ngDoCheck. It checks the content projected into the component.
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    // Called once after the component’s view and child views have been initialized.
    ngAfterViewInit() {
        console.log('ngAfterViewInit', this.viewChild);
    }

    // Called after ngAfterViewInit and every subsequent ngAfterViewChecked. It checks the component's view and child views.
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }

    // Called just before the component is destroyed. It is used for cleanup, such as unsubscribing from observables or detaching event handlers.
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

}

// Explanation of Lifecycle Hooks with Logs

// ngOnChanges:
// Called before ngOnInit (if there are bound input properties) and whenever one or more data-bound input properties change.
// Logs: ngOnChanges, along with the changes.

// ngOnInit:
// Called once after the first ngOnChanges. Creates the component and updates it's input properties
// Logs: ngOnInit

// ngDoCheck:
// Called during every change detection run. 
// Logs: ngDoCheck

// ngAfterContentInit:
// Called once after the first ngDoCheck when the component’s content (ng-content) has been initialized.
// Logs: ngAfterContentInit, along with content child if available.

// ngAfterContentChecked:
// Called after ngAfterContentInit and every subsequent ngDoCheck.
// Logs: ngAfterContentChecked

// ngAfterViewInit:
// Called once after the component’s view and its children have been initialized.
// Logs: ngAfterViewInit, along with the view child if available.

// ngAfterViewChecked:
// Called after ngAfterViewInit and every subsequent ngAfterViewChecked.
// Logs: ngAfterViewChecked

// ngOnDestroy:
// Called just before the component is destroyed.
// Logs: ngOnDestroy