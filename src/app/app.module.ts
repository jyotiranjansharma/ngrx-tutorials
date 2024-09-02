import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducer } from './store/app.state';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EffectsModule } from '@ngrx/effects';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { AngularlifecycleComponent } from './angularlifecycle/angularlifecycle.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ParentComponent,
        ChildComponent,
        TemplateDrivenComponent,
        ModelDrivenComponent,
        AngularlifecycleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        FormsModule,
        StoreDevtoolsModule.instrument({
            logOnly: environment.production
        }),
        ReactiveFormsModule,
        EffectsModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
