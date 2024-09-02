import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angularngrxtutorial';

    showChild = true;

    toggleChild() {
        this.showChild = !this.showChild;
    }
}
