import { AfterContentInit, Component, ContentChild, EventEmitter, Input, NgZone, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterContentInit {

    title = 'default title'
    @Input() childMessage: string = '';
    @Output() messageEvent = new EventEmitter<string>();

    @ContentChild('headerContent1') headerContent1!: TemplateRef<any>;
    @ContentChild('footerContent1') footerContent1!: TemplateRef<any>;

    @ViewChild('headerContainer', { read: ViewContainerRef }) headerContainer!: ViewContainerRef;
    @ViewChild('footerContainer', { read: ViewContainerRef }) footerContainer!: ViewContainerRef;
    @Input() childProperty!: string;
    @Output() childPropertyChange = new EventEmitter<string>();
  
    onChildPropertyChange(newValue: string) {
      this.childPropertyChange.emit(newValue);
    }
    sendMessage() {
        // this.messageEvent.emit('Hello from child');
    }

    constructor(private ngZone: NgZone) {
        ngZone.run(this.sendMessage)
    }
    ngOnInit() {
    }

    ngAfterContentInit() {
        // this.headerContainer.createEmbeddedView(this.headerContent1);
        // this.footerContainer.createEmbeddedView(this.footerContent1);
    }



}
