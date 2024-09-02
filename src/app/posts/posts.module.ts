import { NgModule } from "@angular/core";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostevtoComponent } from "./add-postevto/add-postevto.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/posts.reducer";
import { TooltipDirective } from "../directives/tooltip.directive";
import { HighlightDirective } from "../directives/highlight.directive";
import { CanDeactivateGuard } from "../can-deactivate.guard";
import { EffectsModule } from "@ngrx/effects";
import { PostEffects } from "./state/posts.effects";

const routes = [
    { 
        path: '', 
        component: PostsListComponent,
        children: [
            { path: 'add', component: AddPostevtoComponent},
            { path: 'edit/:id', component: EditPostComponent, canDeactivate: [CanDeactivateGuard]}
        ]
    }
]

@NgModule({
    declarations: [
        PostsListComponent,
        AddPostevtoComponent,
        EditPostComponent,
        TooltipDirective,
        HighlightDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('posts', postsReducer),
        // EffectsModule.forRoot([PostEffects])
    ]
})

export class PostsModule {

}