import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CustomCounterInputComponent } from "../custom-counter-input/custom-counter-input.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";

const routes = [
    { path: '', component: CounterComponent},
]
    
@NgModule({
    declarations: [
        CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CustomCounterInputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('counter', counterReducer)
    ]
})

export class CounterModule {

}